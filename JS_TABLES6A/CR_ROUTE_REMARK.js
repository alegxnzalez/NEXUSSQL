// CR_ROUTE_REMARK.js

window.CR_ROUTE_REMARK = {
  "tables": {
    "CR_ROUTE_REMARK": {
      "columns": {
        "CR_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_ROUTE"
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "Remark type. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "User-entered remark."
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
