// OFFSET_DEFINITION_D.js

window.OFFSET_DEFINITION_D = {
  "tables": {
    "OFFSET_DEFINITION_D": {
      "description": "This table holds different poossible placement dates come under given offset defnition along with their offsets.",
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
        "OFFSET_DEFINITION_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "is the unique identifier for each offset time entry."
},
        "OFFSET_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OFFSET_DEFINITION",
          "info": "is the unique identifier the offset definition."
},
        "DAY_OF_WEEK": {
          "type": "NUMBER",
          "nullable": false,
          "info": "It represents  day of week selected. 1 for Monday and 2 for Tuesday ...and  7 for Sunday."
},
        "START_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "It represents start time selected in milliseconds"
},
        "END_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "It represents enttime selected in milliseconds"
},
        "OFFSET_DAYS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "It represents offset days for selected day of week and time"
},
        "OFFSET_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "It represents offset time in milliseconds"
}
      },
      "fk_tables": []
    }
  }
};