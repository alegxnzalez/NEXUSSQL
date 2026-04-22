// ML_SCENARIO_FILTER_D.js

window.ML_SCENARIO_FILTER_D = {
  "tables": {
    "ML_SCENARIO_FILTER_D": {
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
        "COLUMN_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The column name used in the filter criteria."
},
        "OPERATOR": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The operator used in the filter criteria."
},
        "VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The value used in the filter criteria."
},
        "FILTER_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "ML_SCENARIO_FILTER",
          "info": "The unique ID of the machine learning scenario filter."
},
        "FILTER_COLUMN_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The unique ID of the machine learning scenario filter column."
}
      },
      "fk_tables": []
    }
  }
};