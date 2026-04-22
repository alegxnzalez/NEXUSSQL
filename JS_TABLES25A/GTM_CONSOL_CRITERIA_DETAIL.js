// GTM_CONSOL_CRITERIA_DETAIL.js

window.GTM_CONSOL_CRITERIA_DETAIL = {
  "tables": {
    "GTM_CONSOL_CRITERIA_DETAIL": {
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
        "GTM_CONSOL_CRITERIA_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONSOL_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONSOL_CRITERIA"
        },
        "CRITERIA_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CRITERIA_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "CRITERIA_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
