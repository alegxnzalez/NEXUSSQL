// ML_DATA_MAPPING_D.js

window.ML_DATA_MAPPING_D = {
  "tables": {
    "ML_DATA_MAPPING_D": {
      "description": "This table holds the data mapping of columns from the source table to destination table used during data loading for the machine learning project.",
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
          "foreign_key": "ML_DATA_MAPPING",
          "info": "The GID for the Machine Learning Data Mapping detail record"
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Represents sequence number for the data mapping. Sequence Number to be generated that is a part of primary key"
},
        "ML_DATA_MAPPING_DEF_GID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "foreign_key": "ML_DATA_MAPPING_DEF",
          "info": "Stores the corresponding ML data mapping definition GID"
},
        "SOURCE_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "This stores the source attribute/qualifier value that needs to be copied from to the mapped target column."
},
        "TARGET_COLUMN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This stores the target column name to which the source data is copied into"
},
        "TARGET_COLUMN_LABEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used to specify a user defined label for the target column. This is used to display the target column in the features summary information in the prediction results screen"
},
        "IS_TEXT_COLUMN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the target column value is a text. Incase of text EML performs additional text pre-processing required for ML process"
}
      },
      "fk_tables": []
    }
  }
};