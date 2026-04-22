// COUNTRY_ZONE.js

window.COUNTRY_ZONE = {
  "tables": {
    "COUNTRY_ZONE": {
      "description": "Additional zone information for the country. Multiple countries can be part of a zone.",
      "columns": {
        "COUNTRY_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "COUNTRY_ZONE_GID contains the unique identifier for the country zone. Zones can include: AFR ANT ASI AUS CAM CAR EAF EUR FAR MID NAM NPL SAF SAM SAO"
},
        "COUNTRY_ZONE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "COUNTRY_ZONE_XID contains the unique external identifier for the country zone."
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
        "COUNTRY_CODE"
]
    }
  }
};