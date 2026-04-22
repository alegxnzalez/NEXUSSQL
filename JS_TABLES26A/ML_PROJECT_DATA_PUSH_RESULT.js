// ML_PROJECT_DATA_PUSH_RESULT.js

window.ML_PROJECT_DATA_PUSH_RESULT = {
  "tables": {
    "ML_PROJECT_DATA_PUSH_RESULT": {
      "description": "Database domain where this data is stored.",
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
        "ML_NOTIFY_DATA_REQUEST": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "key_value": true
},
        "ML_NOTIFY_DATA_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "Completed",
                    "Failed",
                    "Processing"
          ]
},
        "LAST_ML_SENT_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the last date that the data was exported to machine learning cloud service"
}
      },
      "fk_tables": []
    }
  }
};