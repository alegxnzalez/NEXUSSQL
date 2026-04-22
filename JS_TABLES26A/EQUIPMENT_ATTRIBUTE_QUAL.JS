// EQUIPMENT_ATTRIBUTE_QUAL.js

window.EQUIPMENT_ATTRIBUTE_QUAL = {
  "tables": {
    "EQUIPMENT_ATTRIBUTE_QUAL": {
      "description": "Qualifier attributes to store additional information about the equipment. For e.g., Weight Capacity, Volume Capacity, Dunnage, Tare Weight, Length, Equipment Order Description etc.",
      "columns": {
        "EQUIPMENT_ATTRIBUTE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EQUIPMENT_ATTRIBUTE_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
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
        "S_EQUIPMENT_ATTRIBUTE"
]
    }
  }
};