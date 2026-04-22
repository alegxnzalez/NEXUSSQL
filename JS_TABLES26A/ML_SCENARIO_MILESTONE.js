// ML_SCENARIO_MILESTONE.js

window.ML_SCENARIO_MILESTONE = {
  "tables": {
    "ML_SCENARIO_MILESTONE": {
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
          "info": "The GID of the machine learning project."
},
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning scenario."
},
        "LEARNING_REQUEST_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The learning request ID used by the machine learning scenario."
},
        "MILESTONE_DETAIL": {
          "type": "VARCHAR2(22)",
          "nullable": true,
          "info": "The details of the milestone logs stored in json format."
},
        "ML_MILESTONE_DETAIL_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A system-generated unique sequence number to define the milestone detail."
}
      },
      "fk_tables": []
    }
  }
};