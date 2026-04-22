// ML_SCENARIO_LEARNING_RESULT.js

window.ML_SCENARIO_LEARNING_RESULT = {
  "tables": {
    "ML_SCENARIO_LEARNING_RESULT": {
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
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning project. "
        },
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning scenario. "
        },
        "MODEL_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "A",
            "B"
          ],
          "info": "The type of the machine learning model for the scenario. \"A\" denotes active model and \"B\" denotes beta model. "
        },
        "MODEL_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The model ID used by the machine learning scenario. "
        },
        "LEARNING_REQUEST_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The learning request ID used by the machine learning scenario. "
        },
        "LEARNING_REQUEST_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The status of the learning request used by the machine learning scenario. "
        },
        "LEARNING_RESULT_DETAIL": {
          "type": "CLOB",
          "nullable": true,
          "info": "The details of the learning results stored in json format. "
        },
        "LEARNING_RESULT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID of the learning result for the machine learning scenario. "
        },
        "LEARNING_RESULT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the learning result for the machine learning scenario. "
        },
        "ACCURACY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the accuracy of the training model. "
        },
        "CONFIDENCE_INTERVAL_HIGH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the higher range value of the confidence interval which is used to quantify the uncertainites in estimating the accuracy of the model. "
        },
        "CONFIDENCE_INTERVAL_LOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the lower range value of the confidence interval which is used to quantify the uncertainites in estimating the model accuracy. "
        },
        "OBJECTIVE_MODEL_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "P",
            "E",
            "OR"
          ],
          "info": "The Objective Model Type value for the machine learning Project Objective. P = Shipment based ETA, E = Event based ETA and OR = Order Route Prediction."
        }
      },
      "fk_tables": []
    }
  }
};
