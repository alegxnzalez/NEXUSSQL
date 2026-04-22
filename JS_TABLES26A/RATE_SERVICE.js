// RATE_SERVICE.js

window.RATE_SERVICE = {
  "tables": {
    "RATE_SERVICE": {
      "description": "Includes the calendar in which lookups should occur, minimum and maximum dirve times, maximum wait per stop, and other similar rules.  Examples:  Overnight                   Two-day",
      "columns": {
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "RATE_SERVICE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "RATE_SERVICE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "foreign_key": "RATE_SERVICE_TYPE"
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "MAX_DRIVE_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DRIVE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_DRIVE_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "MAX_DRIVE_TIME in base units."
},
        "MAX_WAIT_TIME_PER_STOP": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WT_TIME_PER_STOP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_WT_TIME_PER_STOP_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WORK_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WORK_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_WORK_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "MAX_WORK_TIME in base units."
},
        "MAX_WORK_TIME_USAGE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "REST WHEN TIME EXCEEDED",
                    "SHIPMENT INFEASIBLE WHEN TIME EXCEEDED"
          ]
},
        "MIN_REST_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_REST_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "MIN_REST_TIME in base units."
},
        "TIME_WINDOW_TOLERANCE": {
          "type": "NUMBER",
          "nullable": true
},
        "TIME_WINDOW_TOLERANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TIME_WINDOW_TOLERANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "TIME_WINDOW_TOLERANCE in base units."
},
        "MAX_DRIVE_RETRY_COUNT": {
          "type": "NUMBER(3)",
          "nullable": true
},
        "INTER_AIR_CONNECT_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "INTER_AIR_CONN_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "INTER_AIR_CONNECT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "INTER_AIR_CONNECT_TIME in base units."
},
        "INTRA_AIR_CONNECT_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "INTRA_AIR_CONN_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "INTRA_AIR_CONNECT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "INTRA_AIR_CONNECT_TIME in base units."
},
        "MAX_LONGHAUL_WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_LONGHAUL_WT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_LONGHAUL_WT_TIME_BASE": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "SERVICE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVICE_EXTERNAL_ENGINE",
          "info": "The SERVICE_EXTERNAL_ENGINE_GID refers to the SERVICE_EXTERNAL_ENGINE which is used to calculate the service time.  For a given third-party product, we often have multiple entries in the SERVICE_EXTERNAL_ENGINE table for things like fastest versus shortest route."
},
        "INITIAL_REST_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The initial rest time for the rate service before the driver starts to drive.  This is actually a buffer added to the simulated run, since otherwise it assumed that a fully rested driver is available for the drive.  By adding the extra time, it lessens the chance that an order delivery window won't be met because the driver needed to rest from a previous run before starting the new drive."
},
        "INITIAL_REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the initial_rest_time column."
},
        "INITIAL_REST_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The initial_rest_time in base units."
},
        "IS_IGNORE_DELV_LOC_CALENDAR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DRIVE_COST_PER_HR": {
          "type": "NUMBER",
          "nullable": true
},
        "DRIVE_COST_PER_HR_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "DRIVE_COST_PER_HR_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "WAIT_COST_PER_HR": {
          "type": "NUMBER",
          "nullable": true
},
        "WAIT_COST_PER_HR_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "WAIT_COST_PER_HR_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_USE_RUSH_HOUR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "HOS_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HOS_RULE_SET",
          "info": "Indicates which hours of service rules to honor for this rate service."
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "EXTERNAL_SERVICE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Indicates the service type for an external rating service like CarrierConnectXL, etc."
},
        "EXTERNAL_SERVICE_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Indicates the carrier definition of an external rating service like CarrierConnectXL, etc."
},
        "EXTERNAL_VOYAGE_ENGINE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "It specifies an external voyage engine used to connect to an external voyage service like REST GENERIC, SOAP GENERIC or any other vendor specific service."
},
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "The external system that specifies the REST URL or SOAP-based web service for connecting to an external voyage service."
},
        "TRANSIT_TIME_FACTOR": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transit times returned by rate service will be multiplied by this factor to determine the usable transit times. Null value will result in no change to the time."
}
      },
      "fk_tables": [
        "CR_PROJECT",
        "DISTANCE_SERVICE_TIME",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "ORDER_ROUTING_RULE_D",
        "RATE_GEO",
        "RATE_OFFERING",
        "RATE_SERVICE_ACCESSORIAL_TIME",
        "RATE_SERVICE_PROFILE_D",
        "RATE_SERVICE_SPEED",
        "RATE_ZONE_SERVICE_TIME",
        "RELEASE_METHOD",
        "REP_SCHED_SERVICE_MAP",
        "RO_LANE_SPECIAL_SERVICE",
        "SERVICE_TIME",
        "SERVPROV",
        "SERVPROV_SERVICE",
        "SHIPMENT_STOP",
        "TRACKING_LOCATION_RT_D",
        "VOYAGE_SERVICE_MAP"
]
    }
  }
};