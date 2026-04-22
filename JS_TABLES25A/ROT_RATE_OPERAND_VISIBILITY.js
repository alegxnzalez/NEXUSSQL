// ROT_RATE_OPERAND_VISIBILITY.js

window.ROT_RATE_OPERAND_VISIBILITY = {
  "tables": {
    "ROT_RATE_OPERAND_VISIBILITY": {
      "columns": {
        "RATE_OFFERING_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING_TYPE"
        },
        "RATE_GEO_COST_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
        },
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER(10)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
        },
        "IS_VISIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
