// E_KPI_TARGET_VALUE_TYPE.js

window.E_KPI_TARGET_VALUE_TYPE = {
  "tables": {
    "E_KPI_TARGET_VALUE_TYPE": {
      "columns": {
        "KPI_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "E_KPI"
        },
        "TARGET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "E_TARGET_TYPE"
        },
        "TARGET_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "E_TARGET_VALUE_TYPE"
        },
        "TARGET_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "E_KPI_TARGET_VALUE_TYPE_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV"
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "B",
            "S"
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
        }
      },
      "fk_tables": [
        "E_KPI_TARGET_VALUE_STAGE"
      ]
    }
  }
};
