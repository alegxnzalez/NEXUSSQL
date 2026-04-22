// GTM_DECL_MESSAGE_ADDL_INFO.js

window.GTM_DECL_MESSAGE_ADDL_INFO = {
  "tables": {
    "GTM_DECL_MESSAGE_ADDL_INFO": {
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
        "GTM_DECL_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECL_MESSAGE",
          "info": "GTM Declaration Message GID is part of the primary key and is a foreign key to the primary key of table GTM_DECL_MESSAGE. "
        },
        "SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "It is a part of primary key and is the unique number generated using BNG. "
        },
        "TYPE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "It is the message type given by government. "
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "It is the message code given by government. "
        },
        "SEVERITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "It is the message severity given by government. "
        },
        "ADDL_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "It is the message description given by government."
        }
      },
      "fk_tables": []
    }
  }
};
