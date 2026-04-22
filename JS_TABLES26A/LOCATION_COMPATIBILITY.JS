// LOCATION_COMPATIBILITY.js

window.LOCATION_COMPATIBILITY = {
  "tables": {
    "LOCATION_COMPATIBILITY": {
      "description": "The compatibility information between two locations. For e.g., two competitive locations may not like to get their shipment via the same truck.",
      "columns": {
        "LOCATION_GID1": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
},
        "LOCATION_GID2": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
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