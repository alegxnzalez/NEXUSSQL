// ML_SCENARIO_COLUMN_EXCLUDE.js

window.ML_SCENARIO_COLUMN_EXCLUDE = {
  "tables": {
    "ML_SCENARIO_COLUMN_EXCLUDE": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning scenario. "
        },
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning project. "
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The excluded column name."
        }
      },
      "fk_tables": []
    }
  }
};
