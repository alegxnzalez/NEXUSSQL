// RATE_LOAD_FIELD_MASTER.js

window.RATE_LOAD_FIELD_MASTER = {
  "tables": {
    "RATE_LOAD_FIELD_MASTER": {
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
        "RATE_LOAD_FIELD_MASTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_LOAD_FIELD_MASTER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID."
},
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Field table name."
},
        "COLUMN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Field column name."
},
        "VALUE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies the data type of the field ."
},
        "INCLUDES_BREAKS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "For Stop Off Charge and Profile Type Charge, the UI field Include Breaks will be set as Y and for other fields, it will be set as N."
},
        "RATE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Field cost type."
},
        "IS_DEFAULT_TITLE_DYANAMIC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DEFAULT_DISPLAY_TITLE": {
          "type": "VARCHAR2(100)",
          "nullable": true
},
        "DEFAULT_DISPLAY_TITLE_COLUMNS": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "DISPLAY_TITLE_COLUMNS_BREAKS": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "JOIN_ITEM_PK": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "JOIN_ITEM_DISPLAY": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Manual sequence number."
}
      },
      "fk_tables": [
        "RATE_LOAD_FIELD"
]
    }
  }
};