// ML_SCENARIO_COLUMN_INCLUSION.js

window.ML_SCENARIO_COLUMN_INCLUSION = {
  "tables": {
    "ML_SCENARIO_COLUMN_INCLUSION": {
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
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_PROJECT",
          "info": "The GID of the machine learning project. "
        },
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning scenario. "
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The excluded column name. "
        },
        "EXCLUSION_TYPE": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "values": [
            "PES",
            "EES",
            "EEE",
            "OR"
          ],
          "key_value": true,
          "info": "The Exclusion Type value for the machine learning exclude columns are PES= Planning ETA - Shipment,EES= Execution ETA - Shipment, EEE =   Execution ETA - Event and OR = Order Route Prediction. "
        },
        "IS_EXCLUDED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Value for Column excluded or not, by default Y"
        }
      },
      "fk_tables": []
    }
  }
};
