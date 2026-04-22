// FLEX_FIELD_DEF.js

window.FLEX_FIELD_DEF = {
  "tables": {
    "FLEX_FIELD_DEF": {
      "description": "This table defines ATTRIBUTE fields for OTM object tables. The defined ATTRIBUTE field can be used as PickList, DropList, FixedDropList, FlexPickList or FlexDropList on Manager Layout and Screen Set.",
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
        "FLEX_FIELD_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Primary key of the table."
},
        "FLEX_FIELD_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "a valid OTM table name which has flex fields"
},
        "FIELD_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "FLex field name which this definition is for."
},
        "ML_TYPE": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "values": [
                    "pl",
                    "dl",
                    "fxdl",
                    "flxpl",
                    "flxdl"
          ],
          "info": "field type on manager layout, pl(pickList), dl(dropList), fxdl(fixedDropList), flxpl(flexPickList), flxdl(flexDropList)"
},
        "ML_QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "The value will used by PickList or DropList on Manager Layout"
},
        "ML_FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FINDER_SET",
          "info": "The value will used by PickList on Manager Layout"
},
        "ML_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Required for fixedDropList type. Valid Values from this ID will be options for this field on Manager Layout"
},
        "ML_QUERY": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "SQL select statement to be used for this field on Manager Layout"
},
        "SS_TYPE": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "values": [
                    "pl",
                    "dl",
                    "fxdl",
                    "flxpl",
                    "flxdl"
          ],
          "info": "field type on screen set, pl(pickList), dl(dropList), fxdl(fixedDropList), flxpl(flexPickList), flxdl(flexDropList)"
},
        "SS_QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "The value will used by PickList or DropList on Screen Set"
},
        "SS_FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FINDER_SET",
          "info": "The value will used by PickList on Screen Set"
},
        "SS_VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Required for fixedDropList type. Valid Values from this ID will be options for this field on Screen Set"
},
        "SS_QUERY": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "SQL select statement to be used for this field on Screen Set"
}
      },
      "fk_tables": []
    }
  }
};