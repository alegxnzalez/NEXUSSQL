// GTM_DECL_MESSAGE_REMARK.js

window.GTM_DECL_MESSAGE_REMARK = {
  "tables": {
    "GTM_DECL_MESSAGE_REMARK": {
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
        "REMARK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "It is a part of primary key and is the unique number generated using BNG. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "Remark qualifier GID is a foreign key to the primary key of table Remark Qualifier. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Remark Text."
        }
      },
      "fk_tables": []
    }
  }
};
