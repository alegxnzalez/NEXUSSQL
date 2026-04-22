// RATE_OPERAND.js

window.RATE_OPERAND = {
  "tables": {
    "RATE_OPERAND": {
      "columns": {
        "RATE_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_OPERAND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(200)",
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
      "fk_tables": [
        "ACCESSORIAL_BASIS_PRECEDENCE",
        "RATE_OPERAND_STRUCTURE",
        "SPEC_SERVICE_BASIS_PRECEDENCE"
      ]
    }
  }
};
