// LOAD_POINT_PENALTY_MATRIX.js

window.LOAD_POINT_PENALTY_MATRIX = {
  "tables": {
    "LOAD_POINT_PENALTY_MATRIX": {
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
        "LOAD_POINT_PENALTY_MATRIX_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the load point penalty matrix."
},
        "LOAD_POINT_PENALTY_MATRIX_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the load point penalty matrix."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The GID for the location."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The GID for the Equipment Group Profile."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": [
        "LOAD_POINT_PENALTY_MATRIX_D"
]
    }
  }
};