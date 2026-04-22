// REPORT_PARAMETER.js

window.REPORT_PARAMETER = {
  "tables": {
    "REPORT_PARAMETER": {
      "description": "REPORT_PARAMETER stores the parameters required for each report",
      "columns": {
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT",
          "info": "GC3 Global indetifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "REPORT_PARAMETER_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "The Oracle Report parameter name. This name will be used in the scheduling URL."
},
        "REPORT_PARAMETER_DISPLAY_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The name to be shown in the UI scheduling screen."
},
        "REPORT_PARAMETER_TYPE": {
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
                    "L",
                    "F",
                    "Q",
                    "T",
                    "X",
                    "Y",
                    "Z"
          ],
          "info": "S - String, B - Boolean,  I - Whole Number,  N - Decimal,  D - Date,  P - Finder,  L - Dynamic List,  F - Fixed List,  Q - Finder (No Operator),  T - DateTime,  X - Finder (Find Only),  Y - Finder (View Only),  Z - Finder (List Only),  G - N/A,  U - N/A , C - N/A"
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "DEFAULT_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TABLE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "COLUMN_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE"
},
        "GID_QUERY": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "FIXED_VALUES": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Define query type for each report"
},
        "IS_INCLUDED_IN_AUDIT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
},
        "DEFAULT_OPERATOR_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Default value for search criteria dropdown like Same As or Begins With"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};