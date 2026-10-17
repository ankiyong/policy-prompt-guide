/* 항목 입력값을 기존 프롬프트의 빈칸에 안전하게 삽입합니다. */
(function (global) {
  'use strict';

  function getFields(template) {
    const fields = [];
    const inputLine = /^[\t ]*-[\t ]+([^\r\n:]+?):[\t ]*(\[[\t ]+\]|\[첨부\])(?=[\t ]*\r?$)/gm;
    let match;

    while ((match = inputLine.exec(template)) !== null) {
      const label = match[1].trim();
      const token = match[2];
      const isAttachment = token === '[첨부]';

      // 첨부 표시는 기관 양식 항목에서만 사용자 입력으로 취급합니다.
      if (isAttachment && label !== '기관 보고서 양식') continue;

      const start = match.index + match[0].lastIndexOf(token);
      fields.push({
        id: `field-${fields.length}`,
        label,
        token,
        start,
        end: start + token.length,
        isAttachment
      });
    }

    return fields;
  }

  function build(template, valuesArray) {
    const fields = getFields(template);
    const values = Array.isArray(valuesArray) ? valuesArray : [];
    let result = '';
    let cursor = 0;

    fields.forEach((field, index) => {
      const value = values[index] == null ? '' : String(values[index]).trim();
      result += template.slice(cursor, field.start) + (value || field.token);
      cursor = field.end;
    });

    return result + template.slice(cursor);
  }

  global.PromptBuilder = Object.freeze({ getFields, build });
})(window);
