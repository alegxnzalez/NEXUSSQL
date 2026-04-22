// DISTANCE_LOOKUP.js

window.DISTANCE_LOOKUP = {
  "tables": {
    "DISTANCE_LOOKUP": {
      "description": "The DISTANCE table specifies the distance associated with a given X_LANE_GID and RATE_DISTANCE_GID. Note that multiple distances can be specified for the same xlane by specifying different rate_distance_gids. For example, one could specify both the straight-line and practical route distance for a given xlane.",
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DISTANCE_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The value of the distance associated with the x_lane and the rate_distance_gid."
},
        "DISTANCE_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure for the distance_value field."
},
        "DISTANCE_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The value of the distance associated with the x_lane and the rate_distance_gid in base units."
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