// GEO_HIERARCHY_PROFILE.js

window.GEO_HIERARCHY_PROFILE = {
  "tables": {
    "GEO_HIERARCHY_PROFILE": {
      "description": "Defines an ordered set of from-to geographic hierarchies.  This is used by procurement to define a ranked set of 'good' geographies so that 'bad' lanes can be eliminated when copying lanes from core gc3 to the procurement system.l",
      "columns": {
        "GEO_HIERARCHY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GEO_HIERARCHY_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "GEO_HIERARCHY_PROFILE_D",
        "P_SHIPMENT_SET"
]
    }
  }
};