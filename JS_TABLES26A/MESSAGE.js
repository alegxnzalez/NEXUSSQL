// MESSAGE.js

window.MESSAGE = {
  "tables": {
    "MESSAGE": {
      "columns": {
        "LANGUAGE_CD": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "key_value": true
},
        "SOURCE_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "MESSAGE_CD": {
          "type": "NUMBER(5)",
          "nullable": false,
          "key_value": true
},
        "MESSAGE_TEXT": {
          "type": "VARCHAR2(512)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};