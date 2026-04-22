// ML_DATA_MAPPING_DEF.js

window.ML_DATA_MAPPING_DEF = {
  "tables": {
    "ML_DATA_MAPPING_DEF": {
      "description": "This table capture the mapping definition of possible source and target attributes for the data mapping power data. Its used both for UI as well as business process",
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
        "ML_DATA_MAPPING_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the Machine Learning Data Mapping Definition"
},
        "ML_DATA_MAPPING_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the Machine Learning Data Mapping Definition"
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
          "info": "The Objective Model Type value for the data mapping. For example PC= Product Classification Prediction"
},
        "SRC_TABLE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Source table of the data mapping definition"
},
        "SRC_TABLE_TRANSLATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used to store the translation key for source table value"
},
        "SRC_ATTRIBUTE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "StringAttribute",
                    "NumberAttribute",
                    "DateAttribute",
                    "CurrencyAttribute",
                    "Remarks",
                    "Refnumbers"
          ],
          "info": "Holds the valid source attribute types"
},
        "SRC_ATTRIBUTE_TRANSLATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used to store the translation key for source attribute type value"
},
        "SRC_INPUT_TRANSLATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This field stores string that defines the input field name. ex :Remark or Refnum"
},
        "SRC_INPUT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "F",
                    "P",
                    "D"
          ],
          "info": "This field indicates the UI input type for the source input field. The values can be D/P/F. D is used for drop list. P is used for picklist.F is used for Fixed List."
},
        "SRC_INPUT_QUERY": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "This filed indicates the query class name for the source input field. This is required in case the value of the field SOURCE_INPUT_TYPE is P or D"
},
        "SRC_INPUT_FIXED_VALUES": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Holds the list of fixed values if the SOURCE_INPUT_TYPE is F."
},
        "TGT_ATTRIBUTE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "StringAttribute",
                    "NumberAttribute",
                    "DateAttribute",
                    "CurrencyAttribute"
          ],
          "info": "Holds the valid target attribute type"
},
        "TGT_ATTRIBUTE_TRANSLATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used to store the translation key for target attribute type value"
},
        "TGT_INPUT_TRANSLATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This field stores string that defines the target input field name."
},
        "TGT_INPUT_FIXED_VALUES": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Holds the list of fixed values if the TARGET_INPUT_TYPE is F."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "ML_DATA_MAPPING_D"
]
    }
  }
};