// LOGIC_PARAMETER_QUALIFIER.js

window.LOGIC_PARAMETER_QUALIFIER = {
  "tables": {
    "LOGIC_PARAMETER_QUALIFIER": {
      "description": "Parameter definitions for logic configuration",
      "columns": {
        "LOGIC_PARAM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOGIC_PARAM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "PARAMETER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PARAMETER_GROUP",
          "info": "The parameter group such as GENERAL, CONSOLIDATION, SEQUENCING for MULTISTOP config."
},
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "S",
                    "B",
                    "I",
                    "N",
                    "D",
                    "G",
                    "U",
                    "C",
                    "P",
                    "F",
                    "L"
          ],
          "info": "S- String, B - Boolean, I - Integer, N - Number, D- Date, G - PickList, U - UOM, C - Currency, P - Percentage"
},
        "UOM_TYPE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Required when data_type is U"
},
        "GID_QUERY_CLASS": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Java query class name.  Required when data_type is G"
},
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "This columns helps to maintain the valid values for each Logic Config parameter in the VALID_VALUE_TYPE table"
},
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "ACCESSORIAL_COST",
        "LOGIC_PARAMETER",
        "RATE_GEO_COST"
]
    }
  }
};