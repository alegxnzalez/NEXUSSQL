// ML_SCENARIO_FILTER.js

window.ML_SCENARIO_FILTER = {
  "tables": {
    "ML_SCENARIO_FILTER": {
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
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of machine learning scenario."
},
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of machine learning project."
},
        "FILTER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "N",
                    "A",
                    "S"
          ],
          "info": "The type of the machine learning filter. 'N' denotes normal filter. 'A' denotes attribute outlier filter. 'S' denotes statistical outlier filter."
},
        "FILTER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The name of the machine learning filter."
},
        "FILTER_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The unique ID for the machine learning scenario filter."
}
      },
      "fk_tables": [
        "ML_SCENARIO_FILTER_D"
]
    }
  }
};