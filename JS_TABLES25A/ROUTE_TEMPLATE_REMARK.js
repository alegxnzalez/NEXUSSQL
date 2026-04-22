// ROUTE_TEMPLATE_REMARK.js

window.ROUTE_TEMPLATE_REMARK = {
  "tables": {
    "ROUTE_TEMPLATE_REMARK": {
      "columns": {
        "ROUTE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_TEMPLATE",
          "info": "Part of PK.  FK for Route Template. "
        },
        "REMARK_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Part of PK. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "FK for Remark Qual."
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
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
        }
      },
      "fk_tables": []
    }
  }
};
