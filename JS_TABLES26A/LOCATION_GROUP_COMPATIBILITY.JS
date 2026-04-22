// LOCATION_GROUP_COMPATIBILITY.js

window.LOCATION_GROUP_COMPATIBILITY = {
  "tables": {
    "LOCATION_GROUP_COMPATIBILITY": {
      "description": "This is similar to the Location_Compatibity table. Two location groups may not be compatible for a shipment via the same truck as an example. If the locations are grouped and the compatibility information is stored in the Location_Group_Compatibility table, it may reduce the number of entries for individual compatible records in the Location_Compatibility table.",
      "columns": {
        "LOCATION_GROUP_GID1": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_GROUP"
},
        "LOCATION_GROUP_GID2": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_GROUP"
},
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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