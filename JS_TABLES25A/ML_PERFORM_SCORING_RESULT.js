// ML_PERFORM_SCORING_RESULT.js

window.ML_PERFORM_SCORING_RESULT = {
  "tables": {
    "ML_PERFORM_SCORING_RESULT": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the user inserting the data. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the user updating the data. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
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
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID of the shipment. "
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
        "WORKFLOW_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The workflow request ID used by the machine learning scenario. "
        },
        "LEARNING_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The learning request ID used by the machine learning scenario. "
        },
        "TRAINING_MODEL_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The model ID used by the machine learning scenario. "
        },
        "SCORING_RESPONSE_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The scoring response ID used by the perform scoring action. "
        },
        "SCORING_REQUEST_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "NEW",
            "ACCEPTED",
            "PROCESSING",
            "FAILED",
            "COMPLETED"
          ],
          "info": "The status of the scoring request for the scenario. "
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
          "type": "NUMBER()",
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
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The I_TRANSACTION_NO column specifies the transaction to which this log message pertains. "
        },
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The record number primary key identifier for the tracking event specified. "
        },
        "LANE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The lane used by the shipment "
        },
        "GEO_HASH_CODE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "A Geohash code is a unique identifier of a specific region on the Earth. "
        },
        "LANE_ACCURACY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The accuracy of the scoring on a machine learning scenario lane. "
        },
        "GEO_HASH_LANE_ACCURACY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The accuracy of the scoring on a machine learning scenario geohash lane."
        }
      },
      "fk_tables": []
    }
  }
};
