// ML_PERFORM_PREDICTION_RESULT.js

window.ML_PERFORM_PREDICTION_RESULT = {
  "tables": {
    "ML_PERFORM_PREDICTION_RESULT": {
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
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GID of the shipment or order release "
        },
        "MODEL_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "A",
            "B"
          ],
          "key_value": true,
          "info": "The type of the machine learning model for the scenario. \"A\" denotes active model and \"B\" denotes beta model. "
        },
        "PREDICTION_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "NEW",
            "ACCEPTED",
            "PROCESSING",
            "FAILED",
            "COMPLETED"
          ],
          "info": "The status of the prediction request for the scenario. "
        },
        "ACCURACY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The accuracy of the Machine learning scenario scoring. "
        },
        "FORECAST": {
          "type": "CLOB",
          "nullable": true,
          "info": "The details of the learning results stored in json format. "
        },
        "TARGET_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Denotes the predicted value. "
        },
        "PREDICTION_INTERVAL_LOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the lower range number of the prediction interval which is used to quantify the uncertainities in prediction result. "
        },
        "PREDICTION_INTERVAL_HIGH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the higher range value of the prediction interval which is used to quantify the uncertainities in prediction result. "
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Type of Object like Order Release or Shipment."
        }
      },
      "fk_tables": []
    }
  }
};
