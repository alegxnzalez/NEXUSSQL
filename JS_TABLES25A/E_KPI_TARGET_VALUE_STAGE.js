// E_KPI_TARGET_VALUE_STAGE.js

window.E_KPI_TARGET_VALUE_STAGE = {
  "tables": {
    "E_KPI_TARGET_VALUE_STAGE": {
      "columns": {
        "TARGET_VALUE_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "PERIOD_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "MONTHLY",
            "WEEKLY"
          ]
        },
        "TM_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "ALL",
            "MODE"
          ]
        },
        "S_LOC_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "ALL",
            "GEOGRAPHY",
            "COUNTRY",
            "STATE"
          ]
        },
        "D_LOC_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "ALL",
            "GEOGRAPHY",
            "COUNTRY",
            "STATE"
          ]
        },
        "REMARKS": {
          "type": "VARCHAR2(400)",
          "nullable": true
        },
        "KPI_TARGET_VALUE_TYPE_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "foreign_key": "E_KPI_TARGET_VALUE_TYPE",
          "info": "With this column the KPI_TARGET_VALUE_STAGE table is folded under the E_KPI_TARGET_VALUE_TYPE table when the Target Value Type is 'User Entered'"
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
        "E_KPI_TARGET_VALUE_STAGE_D"
      ]
    }
  }
};
