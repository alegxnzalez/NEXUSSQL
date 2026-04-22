// ML_DATA_MAPPING.js

window.ML_DATA_MAPPING = {
  "tables": {
    "ML_DATA_MAPPING": {
      "description": "This table holds the header information for the machine learning data mapping.",
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
        "ML_DATA_MAPPING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the Machine Learning Data Mapping"
},
        "ML_DATA_MAPPING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the Machine Learning Data Mapping"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The Description text for the ML Data Mapping"
},
        "OBJECTIVE_MODEL_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "P",
                    "PE",
                    "OR",
                    "PC"
          ],
          "info": "The Objective Model Type value for the ML data mapping. For example PC= Product Classification Prediction"
}
      },
      "fk_tables": [
        "ML_DATA_MAPPING_D",
        "ML_PROJECT"
]
    }
  }
};