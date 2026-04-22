// LOCATION_LOAD_UNLOAD_POINT.js

window.LOCATION_LOAD_UNLOAD_POINT = {
  "tables": {
    "LOCATION_LOAD_UNLOAD_POINT": {
      "description": "Represents an actual load/unload point as it relates to a location along with data that is associated with that relationship.",
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "Location at which the load/unload point resides."
},
        "LOAD_UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Load/unload point such as a loading dock."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description for the load/unload point."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Equipment group profile for the load/unload point; overrides any at the location."
},
        "IS_LOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this dock or point make be used for loading."
},
        "LOAD_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Indicates where dock should be in a load sequence."
},
        "IS_UNLOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this dock or point make be used for loading."
},
        "UNLOAD_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Indicates where dock should be in an unload sequence."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": [
        "LOAD_POINT_PENALTY_MATRIX_D",
        "OB_LINE",
        "OB_SHIP_UNIT",
        "ORDER_RELEASE"
]
    }
  }
};