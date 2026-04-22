// YARD.js

window.YARD = {
  "tables": {
    "YARD": {
      "description": "Stores detailed information of a slot on a particular row of the yard on a location.  Information includes object GID,object type, start time and end time.",
      "columns": {
        "YARD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier."
},
        "YARD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The Location Identifier."
},
        "ROW_NUMBER": {
          "type": "NUMBER(4)",
          "nullable": false,
          "info": "The specific row number of the yard that will be occupied."
},
        "SLOT_NUMBER": {
          "type": "NUMBER(4)",
          "nullable": false,
          "info": "The specific slot number of the row on the yard that will be occupied."
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Specify the object ID that will be occupied at a particular slot of a row in the yard.  The OBJECT_GID can be null if the slot is blocked."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Specify the object type."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The start time that the slot is occupied."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The end time that the slot is occupied."
},
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true
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
}
      },
      "fk_tables": []
    }
  }
};