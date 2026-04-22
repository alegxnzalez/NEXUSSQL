// BN_RANGE_COUNT.js

window.BN_RANGE_COUNT = {
  "tables": {
    "BN_RANGE_COUNT": {
      "columns": {
        "BN_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RANGE",
          "info": "ID of a named range "
        },
        "IS_OPEN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not the range is open for generating a number.  Once a range is closed, it cannot be reopened. "
        },
        "POOLED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Total numbers available when the range is created. "
        },
        "GENERATED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Numbers in generated state if audit is on; numbers generated if audit is off. "
        },
        "ASSIGNED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Numbers in assigned state. "
        },
        "DESTROYED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Numbers in destroyed state."
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
