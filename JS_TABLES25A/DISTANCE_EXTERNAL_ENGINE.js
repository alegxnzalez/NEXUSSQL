// DISTANCE_EXTERNAL_ENGINE.js

window.DISTANCE_EXTERNAL_ENGINE = {
  "tables": {
    "DISTANCE_EXTERNAL_ENGINE": {
      "columns": {
        "DISTANCE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DISTANCE_EXTERNAL_ENGINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DISTANCE_EXTERNAL_ENGINE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "CACHE_CONTROL_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "L",
            "C",
            "N",
            "A",
            "O"
          ],
          "info": "Controls whether distances should be saved as GC3 lanes.  Y= Cache and lookup values from cache; L= Lookup values from cache but do not save them; C=Cache values but do not use the cache for lookup; N=Do not save value and do not look them up;O=Complete Cache Off. "
        },
        "COUNTY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTY_OVERRIDE",
          "info": "County override if county is being used in EDE lookup and requires a translation from OTM to EDE "
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
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "This flag would specify the external system that needs to be used for rating. "
        },
        "CONNECTION_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "J",
            "W"
          ],
          "info": "Defines the type of transport mechanism used.  In this case, J = javaclass, W= web service which implements REXPublicExternalInterface.java  Other mechanisms may be supported in future iterations. "
        },
        "EXTERNAL_ENGINE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "type of external engine."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "DISTANCE_EXTERNAL_ENGINE_PARMS",
        "DISTANCE_EXTERNAL_GEO",
        "LOCATION",
        "RATE_DISTANCE"
      ]
    }
  }
};
