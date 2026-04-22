// DRIVER.js

window.DRIVER = {
  "tables": {
    "DRIVER": {
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The driver GID. "
        },
        "DRIVER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the driver. "
        },
        "DEF_HOME_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Driver's Home Location ID. "
        },
        "FIRST_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The driver's first name. "
        },
        "LAST_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The driver's last name. "
        },
        "DATE_OF_BIRTH": {
          "type": "DATE",
          "nullable": true,
          "info": "The driver's date of birth. "
        },
        "WORK_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The driver's primary work region. "
        },
        "DED_ACCT_LOCN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The location profile of the driver's dedicated account. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The contact user linked to the driver. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The rate offering linked to the driver. "
        },
        "PREF_CONSTRAINT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "Holds all the Preferences and Constraints for this Driver as a Logic Configuration group. "
        },
        "RESOURCE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "E",
            "I",
            "T"
          ],
          "info": "This enumerate indicates the employment type of the driver. Values include - E - Employed I - Independent Contractor T - Third Party. "
        },
        "USE_HOS_HISTORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This flag indicates if each shipment for this driver should start with fresh HOS regardless of previous history/shipments. "
        },
        "ADJ_HIRE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Adjusted hire date. "
        },
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION_PROFILE",
          "info": "The corporations for which this driver works. "
        },
        "DRIVER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER_TYPE",
          "info": "This driver's driver type. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if the driver is active. "
        },
        "SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location of sighting. "
        },
        "SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date of sighting. "
        },
        "PREV_SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Previous location of sighting. "
        },
        "PREV_SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Previous date of sighting. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "DRIVER_ASSIGNMENT_SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Reflects the latest Driver Assignment record for the driver. "
        },
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "The rate distance at the driver level. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The End Date is the last day/date the driver is available. The shipments' start date and end dates must both fall within the drivers' effective and end date range for an assignment to be feasible, in which case, the driver is assigned to the shipment.\nIf the driver assignment itself pushes the end date of the shipment past the drivers' expiration date, it will be allowed. "
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
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
        }
      },
      "fk_tables": [
        "DRIVER_ASSIGNMENT",
        "DRIVER_CALENDAR",
        "DRIVER_CALENDAR_EVENT",
        "DRIVER_CDL",
        "DRIVER_INV_PARTY",
        "DRIVER_POWER_UNIT_JOIN",
        "DRIVER_PROFILE_D",
        "DRIVER_REFNUM",
        "DRIVER_REMARK",
        "DRIVER_SPECIAL_SERVICE",
        "DRIVER_STATUS",
        "DRIVER_TEAM",
        "DRIVER_TEXT",
        "HOS_DAILY_SUMMARY",
        "I_MESSAGE",
        "REPETITION_SCHEDULE",
        "SHIPMENT",
        "SKU_QUANTITY_ASSET",
        "SS_DRIVER",
        "WORK_INVOICE"
      ]
    }
  }
};
