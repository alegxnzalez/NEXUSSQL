// ML_PROJECT_D.js

window.ML_PROJECT_D = {
  "tables": {
    "ML_PROJECT_D": {
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
          "foreign_key": "ML_PROJECT"
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SAVED_QUERY"
        },
        "SAVED_QUERY_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "LAST_OTI_SENT_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "ML_PROJECT_D_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "Loaded",
            "Unloaded",
            "NotLoaded",
            "LOADED",
            "UNLOADED",
            "NOT_LOADED"
          ]
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
