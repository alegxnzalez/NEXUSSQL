// IE_SHIPMENTSTATUS.js

window.IE_SHIPMENTSTATUS = {
  "tables": {
    "IE_SHIPMENTSTATUS": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment data of the tracking event. "
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "The service provider alias qualifier identifier for the tracking event. "
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The service provider alias value for the qualifier defined. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A description for the tracking event captured. "
        },
        "STATUS_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A status level associated with the tracking event. "
        },
        "VESSEL_CODE_QUALIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The vessel code qualifier identifier defined to itemize vessel codes. "
        },
        "VESSEL_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The vessel code associated with the qualifier defined. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The 3 digit country code that the vessel is registered in. "
        },
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VESSEL",
          "info": "The vessel GID. "
        },
        "SHIP_OR_SAIL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The ship sail date for the vessel used in the tracking event. "
        },
        "DISCHARGE_OR_COMPLETION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The discharge or completion date for the vessel used in the tracking event. "
        },
        "FIGHT_OR_VOYAGE_NUM": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The flight number if the tracking event is for a air mode or the voyage number if for ocean mode. "
        },
        "WEIGHT_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A total weight value associated with the shipment tracking event. "
        },
        "WEIGHT_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total weight unit of measure code. "
        },
        "WEIGHT_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight in the base unit of measure. "
        },
        "VOLUME_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A total volume value associated with the shipment tracking event. "
        },
        "VOLUME_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total volume unit of measure code. "
        },
        "VOLUME_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume in the base unit of measure. "
        },
        "OB_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_REFNUM_QUAL",
          "info": "The order base reference qualifier for the order level data of the tracking event. Define by order base, order release, or order release line. "
        },
        "OB_REFNUM_VALUE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The order base reference level value for the defined qualifier. "
        },
        "STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "The status code GID associated with the tracking event. "
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The time zone GID for the tracking event date. "
        },
        "EVENTDATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The tracking event date. "
        },
        "STATUS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "The status reason code that is mapped to the tracking event. "
        },
        "SS_CONTACT_FUNCTION_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The contact function code for the individual entering the tracking event. "
        },
        "SS_CONTACT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The contact name for the individual entering the tracking event. "
        },
        "TRAIN_JCT_BO_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. The train junction box code for the CLM message. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
        },
        "RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY",
          "info": "The responsible party that is defined for the type of status for the tracking event. "
        },
        "RAIL_ROAD_REPORTING_SCAC": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The SCAC for the rail road service provider that is providing the shipment status message or CLM. "
        },
        "IS_CAR_LOADED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "The CLM field to indicate whether the rail car is loaded or empty. "
        },
        "CAR_DESTINATION_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car destination city. "
        },
        "CAR_DESTINATION_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car destination state. "
        },
        "CAR_DESTINATION_SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car destination state. "
        },
        "CAR_DESTINATION_ETA_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the estimated time of arrival to the car destination node. "
        },
        "ORIG_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If this event is to adjust a previous tracking event, this field specifies the original transaction identifier. "
        },
        "TEMPERATURE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The temperature associated with the shipment tracking event. "
        },
        "TEMPERATURE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The temperature value in the base unit of measure. "
        },
        "TEMPERATURE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The temperature unit of measure. "
        },
        "EVENT_RECEIVED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The time stamp for when the tracking event was received. "
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The driver GID associated with the tracking event. "
        },
        "EVENT_END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The event end date associated with the tracking event. "
        },
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The power unit GID associated with the tracking event. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The shipment GID associated with the tracking event. "
        },
        "DRIVER_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER_REFNUM_QUAL",
          "info": "The reference number qualifier for the driver that can be used to associate to a tracking event. "
        },
        "DRIVER_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The driver reference number value for the reference number qualifier defined. "
        },
        "PU_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "POWER_UNIT_REFNUM_QUAL",
          "info": "The reference number qualifier for the power unit that can be used to associate to a tracking event. "
        },
        "PU_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The power unit reference number value for the reference number qualifier defined. "
        },
        "RELATED_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If this event is related to another tracking event this field specifies the related transaction number. "
        },
        "EXTERNAL_EVENT_REFERENCE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The reference number of the event used by the external system sending the event. "
        },
        "EXTERNAL_DATA_SOURCE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The identifying code for the external system data source. "
        },
        "TIME_WORKED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time worked for the tracking event for recording purposes. "
        },
        "TIME_WORKED_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The time worked unit of measure code. "
        },
        "TIME_WORKED_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time worked in the base unit of measure. "
        },
        "TIME_DRIVEN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time driven for the tracking event for recording purposes. "
        },
        "TIME_DRIVEN_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The time driven unit of measure code. "
        },
        "TIME_DRIVEN_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time driven in the base unit of measure. "
        },
        "DRIVER_CAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER_CALENDAR_EVENT",
          "info": "This is a GID for the driver calendar event being recorded with the tracking event, such as vacation time. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Boolean field. When it is set to \"Y\", this row and its child data will be purged. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order base identifier for the order level data of the tracking event.  Define by order base, order release, or order release line. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order release identifier for the order level data of the tracking event. Define by order base, order release, or order release line. "
        },
        "OR_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "The order release reference qualifier for the order level data of the tracking event. Define by order base, order release, or order release line. "
        },
        "OR_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order release reference number value for the defined qualifier. "
        },
        "TRACKING_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The specific tracking number for the shipment provided by the service provider and is matched to a reference qualifier called tracking number. "
        },
        "CAR_DESTINATION_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Shipment tracking event data for rail shipments. Defines the rail car destination location GID. "
        },
        "CAR_DESTINATION_COUNTRY": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car destination country. "
        },
        "ERPC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. ERPC is a system for abbreviating rail location names. "
        },
        "FILING_RESPONSE_TYPE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The filing response type for Automated Export System (AES) via integration as tracking events. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The shipment group GID associated with the tracking event. "
        },
        "SHIP_GROUP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_TYPE",
          "info": "The shipment group type (such as import, export, cargo manifest) for the shipment group associated with the tracking event. "
        },
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The order release line for the order level data of the tracking event. Define by order base, order release, or order release line. "
        },
        "ORL_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The order release line reference number value for the defined qualifier. "
        },
        "OR_LINE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE_REFNUM_QUAL",
          "info": "The order release line reference qualifier for the order level data of the tracking event. Define by order base, order release, or order release line. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A indicator that can be set to flag tracking event status. "
        },
        "CAR_REPAIR_HOURS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car repair hours. "
        },
        "CAR_INTERCHANGE_ETI_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. Defines the rail car interchange date. "
        },
        "NEXT_JUNCTION_SPLC": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Shipment tracking event data for rail shipments. This field specifies the interchange junction code. ETA for this junction will be Interchange ETI Date. "
        },
        "AHEAD_LATE_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AHEAD_LATE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AHEAD_LATE_TIME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "AHEAD_OR_LATE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "This field describes the location at which the event occurs. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The column defines the equipment initial for the equipment for which the event occurs. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The column defines the equipment number for the equipment for which the event occurs. "
        },
        "CAR_DEST_TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The time zone GID for the car destination Estimated Time of Arrival date. "
        },
        "CAR_INTERCHANGE_TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The time zone GID for the car interchange Estimated Time of Interchange date. "
        },
        "SHIPMENT_STATUS_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Used for the ease of identification of the type of event. For example, this can be used to specify if the tracking is for matching with shipment, shipment group, order, etc."
        }
      },
      "fk_tables": []
    }
  }
};
