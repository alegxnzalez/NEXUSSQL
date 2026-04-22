// TRACKING_LOCATION_RT.js

window.TRACKING_LOCATION_RT = {
  "tables": {
    "TRACKING_LOCATION_RT": {
      "columns": {
        "TRACKING_LOCATION_RT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID. Template GID."
},
        "TRACKING_LOCATION_RT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. Template XID."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Tracking Location Route Template Description."
},
        "SERVPROV_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SCAC",
          "info": "Service Provider.Refers column SCAC.SCAC_GID, Will ack as the master service provider for all the documentation purpose"
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the source locations withing GC3. The gid contains the domain portion.Refers column location.location_gid."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the destination locations withing GC3. The gid contains the domain portion.Refers column location.location_gid ."
},
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "To indicate if it's the default route between the above source and destination locations."
},
        "RATE_GEO_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_PROFILE"
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
        "TRACKING_LOCATION_RT_D"
]
    }
  }
};