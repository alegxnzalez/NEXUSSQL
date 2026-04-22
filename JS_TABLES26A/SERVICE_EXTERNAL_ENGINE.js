// SERVICE_EXTERNAL_ENGINE.js

window.SERVICE_EXTERNAL_ENGINE = {
  "tables": {
    "SERVICE_EXTERNAL_ENGINE": {
      "description": "The SERVICE_EXTERNAL_ENGINE table holds data relevant to third party external engines, including which GC3 class handles that engine.  Each entry in the SERVICE_EXTERNAL_ENGINE table refers to an external engine along with (via the SERVICE_EXTERNAL_ENGINE_PARM table) a set of parameters to be passed to that engine in order to calculate service time.  .",
      "columns": {
        "SERVICE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The global identifier for a SERVICE_EXTERNAL_ENGINE.  A SERVICE_EXTERNAL_ENGINE refers to a third-party product that calculates service times."
},
        "SERVICE_EXTERNAL_ENGINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for a SERVICE_EXTERNAL_ENGINE."
},
        "SERVICE_EXTERNAL_ENGINE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "A description of the service_external_engine."
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "Name of java class that implements the external engine."
},
        "TIME_TOLERANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If engine is time sensitive, how close must two start times be to be considered 'close enough'?  NULL if engine is not time sensitive."
},
        "TIME_TOLERANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for TIME_TOLERANCE column."
},
        "TIME_TOLERANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "TIME_TOLERANCE in base units."
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
        "EXTERNAL_ENGINE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "type of external engine."
},
        "CACHE_CONTROL_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "O"
          ],
          "info": "O=Complete Cache Off."
},
        "CONNECTION_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "J",
                    "W"
          ],
          "info": "to use java or webservices"
},
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "RATE_SERVICE",
        "SERVICE_EXTERNAL_ENGINE_PARM"
]
    }
  }
};