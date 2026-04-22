// REPETITION_SCHEDULE.js

window.REPETITION_SCHEDULE = {
  "tables": {
    "REPETITION_SCHEDULE": {
      "columns": {
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "REPETITION_SCHEDULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The service provider GID constraint for the repetition schedule. "
        },
        "MONDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "TUESDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "WEDNESDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "THURSDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "FRIDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SATURDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SUNDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "REP_SCHED_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REP_SCHED_SERVICE"
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "DISCONTINUE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "SCHEDULE_NOTE": {
          "type": "VARCHAR2(1000)",
          "nullable": false
        },
        "REFERENCE_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "SCHEDULE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "DYNAMIC TRIP",
            "STATIC TRIP",
            "FLIGHT",
            "VESSEL",
            "GROUND SERVICE",
            "DETACHABLE TRIP"
          ],
          "info": "Determines whether the repetition schedulel is a consol or not.  Valid values are DYNAMIC TRIP, STATIC TRIP, FLIGHT, VESSEL, GROUND SERVICE, DETACHABLE TRIP.  When this field is populated, it is a consol. "
        },
        "FLIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLIGHT",
          "info": "Should be populated if the schedule type is a FLIGHT. "
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VOYAGE",
          "info": "Should be populated when the schedule type is a TRIP. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "Required when the schedule type is a TRIP. "
        },
        "IS_IGNORE_EQUIPMENT_CAPACITY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines whether or not to check the equipment's capacity when adding orders to the trip. "
        },
        "MAX_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight pre-booked on the specified flight consol. "
        },
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the max_weight. "
        },
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight pre-booked on the specified flight consol in base units. "
        },
        "MAX_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume pre-booked on the specified flight consol. "
        },
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the max_volume. "
        },
        "MAX_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume pre-booked on the specified flight consol in base units. "
        },
        "START_TIME_ADJ": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Only defined for DYNAMIC TRIP schedule. "
        },
        "START_TIME_ADJ_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for start_time_adj. "
        },
        "START_TIME_ADJ_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUTOFF_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time this schedule is used up to. "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR"
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
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER"
        },
        "DRIVER_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NUM_OF_INSTANCES_M": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_TU": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_W": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_TH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_F": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_SA": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_INSTANCES_SU": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_FIXED_EQUIPMENT_GROUP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The service provider profile GID constraint for the repetition schedule."
        }
      },
      "fk_tables": [
        "GROUND_REFNUM",
        "GROUND_SCHEDULE_REMARK",
        "GROUND_SCHED_GEN_D",
        "LEG_SCHEDULE",
        "REPETITION_SCHEDULE_INV_PARTY",
        "REPETITION_SCHEDULE_SET_D",
        "REPETITION_SCHEDULE_STOP",
        "SHIPMENT",
        "SHIPMENT_STOP",
        "TRANSPORT_NETWORK_SCHEDULE"
      ]
    }
  }
};
