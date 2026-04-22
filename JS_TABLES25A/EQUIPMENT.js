// EQUIPMENT.js

window.EQUIPMENT = {
  "tables": {
    "EQUIPMENT": {
      "columns": {
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for equipment. "
        },
        "EQUIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the equipment type. "
        },
        "EQUIPMENT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text to describe the type of equipment. Examples include: CAR LOADS, TANKER, TRUCKS "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "The GID for the equipment type. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Typically this is a prefix or alphanumeric combination associated with the carrier Standard Carrier Alpha Code (SCAC) for the equipment. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The number assigned to the equipment and is entered to associate the number with the equipment initial. "
        },
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Equipment Initial and Number is a concatenation of the equipment initial and equipment number. "
        },
        "OWNERSHIP_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Alpha-numeric code designating the status of the equipment (for example, leased or owned). "
        },
        "OWNER_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text for the name of the equipment owner. "
        },
        "TAG1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "C",
            "L",
            "P",
            "A"
          ],
          "info": "The Type of Owner for this Equipment. C = Carrier Owned, L = Lessee, P = Private, A = All "
        },
        "LESSEE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "The SCAC for the Lessee of the Equipment. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty weight of the equipment by itself. "
        },
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure associated with the tare weight of the equipment. "
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Tare weight of the equipment in the base unit of measure. "
        },
        "AAR_CAR_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The Association of American Railroads Car Type. "
        },
        "DATE_BUILT": {
          "type": "DATE",
          "nullable": true,
          "info": "The date this equipment was built. "
        },
        "PURCH_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The purchase date of this equipment. "
        },
        "REGISTRATION_NUM": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Registration number. "
        },
        "REGISTRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date of the registration. "
        },
        "LICENSE_PLATE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The license plate number. "
        },
        "LICENSE_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The license state. "
        },
        "SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Sighting location of the equipment. "
        },
        "SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of the sighting. "
        },
        "PREV_SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Previous sighting location of the equipment. "
        },
        "PREV_SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of the previous sighting. "
        },
        "INTERCHANGE_RECV_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Interchange receive location of the equipment. "
        },
        "INTERCHANGE_RECV_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of the interchange receive. "
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
        "IS_CONTAINER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Yes/No indicator for whether the equipment is a container. "
        },
        "CURRENT_CHASSIS_INITIAL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Initial of the current chassis. "
        },
        "CURRENT_CHASSIS_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Number of the current chassis. "
        },
        "LAST_OUTGATE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location where the equipment (chassis/container or trailer) was last outgated. "
        },
        "LAST_OUTGATE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Outgate time stamp at the outbound ramp. "
        },
        "LAST_INGATE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Ingate time stamp at the inbound ramp. "
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
        "PARK_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Park location of the equipment. "
        },
        "UM_CHARGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "UMLER Mileage Charge. "
        },
        "UM_CHARGE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "UMLER Mileage Charge Currency. "
        },
        "UM_CHARGE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "UMLER Mileage Charge Base Amount. "
        },
        "UM_CHARGE_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit (example, 2). "
        },
        "UM_CHARGE_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit in Base UOM. "
        },
        "UM_CHARGE_UNIT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit (example, Mile). "
        },
        "AAR_MECH_DESIG": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "AAR Mechanical Designation. "
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
        "EQUIP_MAX_GROSS_WT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum permissible weight of the equipment and the load. "
        },
        "EQUIP_MAX_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure associated with the equipment's gross maximum weight. "
        },
        "EQUIP_MAX_GROSS_WT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment's gross maximum weight of the equipment in the base unit of measure. "
        },
        "FLOOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Actual height of the platform or floor above the ground or the rail. "
        },
        "FLOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure associated with the floor height. "
        },
        "FLOOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The floor height in the base unit of measure. "
        },
        "EMPTY_CG_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, indicates the height from Top of Rail to the Center of Gravity. "
        },
        "EMPTY_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure associated with the empty center of gravity height. "
        },
        "EMPTY_CG_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty center of gravity height in the base unit of measure. "
        },
        "DRY_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum interior capacity of the equipment. "
        },
        "DRY_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure associated with the maximum dry capacity of the equipment. "
        },
        "DRY_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum dry capacity in the base unit of measure. "
        },
        "LIQUID_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of gallons the equipment will hold. "
        },
        "LIQUID_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure associated with the liquid capacity of the equipment. "
        },
        "LIQUID_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The liquid capacity in the base unit of measure. "
        },
        "ASSIGNED_PRODUCT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "N/A "
        },
        "CAR_DESTINATION_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Specifies destination for the car. "
        },
        "CAR_DESTINATION_ETA_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This is the estimated arrival time at the car destination. "
        },
        "EMPTY_CG_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, length wise position of center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty center of gravity length in the base unit of measure. "
        },
        "EMPTY_CG_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the empty center of gravity length column. "
        },
        "EMPTY_CG_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, width wise position of center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty center of gravity length in the base unit of measure. "
        },
        "EMPTY_CG_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the empty center of gravity width column. "
        },
        "LOAD_OR_EMPTY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "L",
            "E",
            "U"
          ],
          "info": "Indicates whether the equipment is Load or Empty or Unknown (default) "
        },
        "SIGHTING_EVT_SC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Sighting event represents the current status code of the equipment. "
        },
        "PREV_SIGHTING_EVT_SC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Previous sighting event represents the previous status code of the equipment. "
        },
        "DIVISION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is the Business Division name field for part of the organization that is responsible for the asset and the business. "
        },
        "CUSTOMER_FLEET": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is a more granular field for the organization to specify the customer assignment as the customer wishes. It will identify product, location, customer, or any combination. "
        },
        "REPORTING_RR_SCAC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "This is to report the Railroad Reporting SCAC code that provided the last event. It is copied in an agent action called UPDATE SIGHTING. "
        },
        "PREV_REPORTING_RR_SCAC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "This is the previous Reporting SCAC.  The UPDATE ACTION moves the current value to the previous value before overwriting the current value. "
        },
        "RELEASE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Every time a car is released, this field is updated by a customer controlled agent action.  It is used to dynamically calculate in-transit time. "
        },
        "ARRIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Every time a car arrives, a customer controlled agent action will populate this. It is used to dynamically calculate the dwell time. "
        },
        "ORDER_SOURCE": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is a customer determined field based on an agent action.  Most likely the customer will populate an abbreviated version of the city and state. "
        },
        "ORDER_DESTINATION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is a customer determined field based on an agent action.  Most likely the customer will populate an abbreviated version of the city and state. "
        },
        "ORDER_CUSTOMER_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is a customer determined field based on an agent action.  Most likely the customer will populate an abbreviated version of the consignee. "
        },
        "TRUCK_CENTER_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length between the centers of the two truck/bogie systems. Applicable only to rail cars. "
        },
        "TRUCK_CENTER_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length between the centers of the two truck/bogie systems in the base unit of measure. "
        },
        "TRUCK_CENTER_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the length between the centers of the two truck/bogie systems "
        },
        "TRUCK_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of trucks/bogies on the equipment. Applicable only to rail cars. "
        },
        "TOTAL_AXLE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of axles on the equipment. Applicable only to rail cars. "
        },
        "MAX_AXLE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum allowed axle weight. Applicable only to rail cars. "
        },
        "MAX_AXLE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum allowed axle weight in the base unit of measure. "
        },
        "MAX_AXLE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum allowed axle weight."
        }
      },
      "fk_tables": [
        "DM_TRANSACTION",
        "EQUIPMENT_REFNUM",
        "EQUIPMENT_REMARK",
        "EQUIPMENT_SPECIAL_SERVICE",
        "EQUIPMENT_STATUS",
        "EQUIPMENT_TEXT",
        "IE_SS_S_EQUIPMENT",
        "I_MESSAGE",
        "LEASE_EQUIPMENT",
        "OR_EQUIPMENT",
        "POWER_UNIT_EQUIPMENT",
        "SKU_QUANTITY_ASSET",
        "SS_EQUIPMENT"
      ]
    }
  }
};
