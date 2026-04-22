// PU_TYPE_REMARK.js

window.PU_TYPE_REMARK = {
  "tables": {
    "PU_TYPE_REMARK": {
      "columns": {
        "POWER_UNIT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "POWER_UNIT_TYPE"
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL"
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false
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
