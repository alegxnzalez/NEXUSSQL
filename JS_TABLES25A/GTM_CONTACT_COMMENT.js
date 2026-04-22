// GTM_CONTACT_COMMENT.js

window.GTM_CONTACT_COMMENT = {
  "tables": {
    "GTM_CONTACT_COMMENT": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "CONTACT_COMMENT_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
        },
        "COMMENT_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "COMMENT_BY": {
          "type": "VARCHAR2(128)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
