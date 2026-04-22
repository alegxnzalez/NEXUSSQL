// EQUIPMENT_MARK.js

window.EQUIPMENT_MARK = {
  "tables": {
    "EQUIPMENT_MARK": {
      "description": "Equipment Marks are a sequence of two to four letters that uniquely identifies the owner of a piece of equipment.",
      "columns": {
        "EQUIPMENT_MARK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique sequence of two to four letters representing the Equipment Mark for a piece of Equipment."
},
        "EQUIPMENT_MARK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The sequence of two to four letters representing the Equipment Mark for a piece of Equipment."
},
        "OWNER_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Owner Name of the Equipment Mark."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description of the Equipment Mark."
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
      "fk_tables": [
        "EQUIPMENT_MARK_LIST_DETAIL"
]
    }
  }
};