// EQUIPMENT_GROUP_PROFILE.js

window.EQUIPMENT_GROUP_PROFILE = {
  "tables": {
    "EQUIPMENT_GROUP_PROFILE": {
      "columns": {
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "EQUIPMENT_GROUP_PROFILE_GID is the unique identifier for the equipment group profile. "
        },
        "EQUIPMENT_GROUP_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "EQUIPMENT_GROUP_PROFILE_XID is the unique external identifier for the equipment group profile. "
        },
        "EQUIPMENT_GROUP_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "EQUIPMENT_GROUP_PROFILE_NAME is text for the name of the equipment group profile."
        },
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
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
        "ACTIVITY_TIME_DEF",
        "APPT_RULE_SET",
        "CAPACITY_COMMITMENT_ALLOC",
        "COMMIT_DOW_OVERRIDE",
        "COMMIT_USAGE",
        "COMMODITY",
        "CONSTRAINT_SET",
        "CR_FORECAST",
        "CR_LV_AGGREGATE",
        "DM_RULE",
        "EQUIPMENT_GROUP_PROFILE_D",
        "EQUIP_GROUP_AVG_TA_DURATION",
        "EQUIP_GROUP_PROFILE_SET_D",
        "LANE_SUMMARY",
        "LEG",
        "LOAD_POINT_PENALTY_MATRIX",
        "LOCATION",
        "LOCATION_LOAD_UNLOAD_POINT",
        "LOCATION_RESOURCE",
        "LOGISTICS_GUIDE_AGGREGATE_DATA",
        "LOGISTICS_GUIDE_DETAIL",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "P_SHIPMENT_SET",
        "RATE_GEO",
        "RATE_OFFERING",
        "RESOURCE_SCHEDULE",
        "RESOURCE_SCHEDULE_INSTANCE",
        "ROUTE_INSTANCE",
        "ROUTE_INSTANCE_LEG",
        "ROUTE_TEMPLATE",
        "ROUTE_TEMPLATE_LEG"
      ]
    }
  }
};
