/**
 * Bài tập 1
 * Sắp xếp 3 số nguyên theo thứ tự tăng dần.
 * 
 * Đầu vào:
 *      Cho user nhập 3 số nguyên num_1, num_2, num_3
 * 
 * Xử lý:
 *      Nếu num_1 >= num_2 
 *      -> Đúng
 *          -> Nếu num_2 >= num_3
 *              -> Đúng: sắp xếp num_3, num_2, num_1
 *              -> Sai : sắp xếp num_2, num_3, num_1
 *      -> Sai
 *          -> Nếu num_3 >= num_1
 *              -> Đúng : sắp xếp num_1. num_3, num_2
 *              -> Sai : sắp xếp num_3, num_1, num_2
 * 
 * Đầu ra:
 *      Xuất thứ tự tăng dần ra màn hình
 *      
 */

document.getElementById("btnTangDan").onclick = function () {

    var num1 = document.getElementById("num_1").value * 1;
    var num2 = document.getElementById("num_2").value * 1;
    var num3 = document.getElementById("num_3").value * 1;

    var numTD = "";
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            numTD += "<p>" + num3 + ", " + num2 + ", " + num1 + "</p>";
        }
        else {
            numTD += "<p>" + num2 + ", " + num3 + ", " + num1 + "</p>";
        }
    }
    else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            numTD += "<p>" + num3 + ", " + num1 + ", " + num2 + "</p>";
        }
        else {
            numTD += "<p>" + num1 + ", " + num3 + ", " + num2 + "</p>";
        }
    }
    else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            numTD += "<p>" + num2 + ", " + num1 + ", " + num3 + "</p>";
        }
        else {
            numTD += "<p>" + num1 + ", " + num2 + ", " + num3 + "</p>";
        }
    }

    document.getElementById("numTD").innerHTML = numTD;
}





/**
 * Bài tập 2
 * Viết chương trình gửi lời chào hỏi thành viên trong gia đình
 * 
 * Đầu vào:
 *  Chọn 1 trong các thành viên gia đình Bố, Mẹ, Anh trai, Em gái từ droplist
 * 
 * Xử lý:
 *  Nếu giá trị = B -> Kết quả là Chào bố
 *  Nếu giá trị = M -> Kết quả là Chào mẹ
 *  Nếu giá trị = A -> Kết quả là Chào anh
 *  Nếu giá trị = E -> Kết quả là Chào em
 * 
 * Đầu ra:
 *  Xuất kết quả câu chào lên màn hình
 * 
 */

document.getElementById("btnChao").onclick = function () {
    var family = document.getElementById("family").value;

    var chaoGD = "";

    if (family === "B") {
        chaoGD += "<p>Xin chào Bố!</p>";
    }
    else if (family === "M") {
        chaoGD += "<p>Xin chào Mẹ!</p>";
    }
    else if (family === "A") {
        chaoGD += "<p>Xin chào Anh trai!</p>";
    }
    else {
        chaoGD += "<p>Chào em gái!</p>";
    }

    document.getElementById("chaoGD").innerHTML = chaoGD;
}



/**
 * Bài tập 3
 * Nhập 3 số nguyên. Có bao nhiêu số lẽ, bao nhiêu số chẵn?
 * 
 * Đầu vào:
 *  Nhập 3 số nguyên bất kỳ num_4, num_5, num_6
 * 
 * Xử lý:
 *  Gọi numChan là tổng số chẵn
 *  Gọi numLe là tổng số lẻ
 *  
 *  Nếu số nhập ở đầu vào chia hết cho 2 có phần dư = 0 
 *  đúng -> numChan + 1;
 *  sai -> không cộng;
 * 
 *  numLe = 3 - numChan;
 * 
 * Đầu ra:
 *  Xuất kết quả numChan, numLe ra màn hình;
 */

document.getElementById("btnSoChanLe").onclick = function () {
    var num4 = document.getElementById("num_4").value * 1;
    var num5 = document.getElementById("num_5").value * 1;
    var num6 = document.getElementById("num_6").value * 1;

    var numChan = 0;
    var numLe = 0;
    var numCL = "";

    if (num4 % 2 == 0) {
        numChan += 1;
    }

    if (num5 % 2 == 0) {
        numChan += 1;
    }

    if (num6 % 2 == 0) {
        numChan += 1;
    }

    numLe = 3 - numChan;

    numCL += "<p>Có " + numChan + " số chẵn. Có " + numLe + " số lẻ</p>";
    console.log(numCL);
    document.getElementById("numCL").innerHTML = numCL;
}

/**
 * Bài tập 4
 * Nhập cạnh tam giác -> cho biết tam giác gì
 * 
 * Đầu vào:
 *  Nhập 3 cạnh tam giác a, b, c
 * 
 * Xử lý:
 *  1. Nếu a = b && a != c
 *         hoặc a=c && a != b
 *         hoặc b=c && b != a -> tam giác cân
 *  2. Nếu a = b = c -> tam giác đều
 *  3. Xét a lớn nhất trong 3 cạnh
 *          a*a = b*b + c*c
 *         b lớn nhất trong 3 cạnh
 *          b*b = a*a + c*c
 *         c lớn nhất trong 3cạnh
 *          c*c = a*a + b*b
 *  Nếu biểu thức trên là true -> tam giác vuông
 *  
 *  4. Nếu không thỏa 1~3 -> tam giác thường
 * 
 * Đầu ra:
 *  Xuất ra màn hình tên loại tam giác
 */

document.getElementById("btnTamGiac").onclick = function () {
    var canhA = document.getElementById("canhA").value * 1;
    var canhB = document.getElementById("canhB").value * 1;
    var canhC = document.getElementById("canhC").value * 1;

    var loaiTamGiac = "";

    if (canhA == 0 || canhB == 0 || canhC == 0){
        loaiTamGiac += "<p>Không phải tam giác</p>";
    }

    else if (canhA == canhB && canhA == canhC) {
        loaiTamGiac += "<p>Tam giác đều</p>";
    }

    else if (canhA == canhB && canhA != canhC || canhA == canhC && canhA != canhB || canhB == canhC && canhB != canhA) {
        loaiTamGiac += "<p>Tam giác cân</p>";
    }

    else if (canhA > canhB && canhA > canhC && canhA * canhA == canhB * canhB + canhC * canhC) {
        loaiTamGiac += "<p>Tam giác vuông</p>";
    }

    else if (canhB > canhA && canhB > canhC && canhB * canhB == canhA * canhA + canhC * canhC) {
        loaiTamGiac += "<p>Tam giác vuông</p>";
    }

    else if (canhC > canhA && canhC > canhB && canhC * canhC == canhA * canhA + canhB * canhB) {
        loaiTamGiac += "<p>Tam giác vuông</p>";
    }

    else {
        loaiTamGiac += "<p>Tam giác thường</p>";
    }

    document.getElementById("loaiTamGiac").innerHTML = loaiTamGiac;
}



/**
 * Bài tập thêm 1
 * 
 * 1. Đầu vào
 *      Nhập ngày, tháng, năm
 * 
 * 2. Xử lý
 *      * Giả sử nhập đúng, không cần kiểm tra
 * 
 *      Điều kiện: Tính ngày sau ngày trước
 *      Khi bấm vào ngày trước -> ngày = ngày - 1
 *      Khi bấm vào ngày sau -> ngày = ngày + 1
 * 
 *      Điều kiện chung: Kiểm tra năm nhuận (366 ngày) 
 *      -> Thỏa 1 trong 2 điều kiện
 *              a. Chia hết cho 4 và không chia hết cho 100
 *              b. Chia hết cho 400
 *      
 *      -> Nếu đúng thì xử lý theo tháng 2 có 29 ngày
 *      -> Nếu sai thì xử lý theo tháng 2 có 28 ngày
 * 
 * 
 *      Kiểm tra đầu tháng hoặc cuối tháng hoặc ngày thường
 *      -> Nếu đầu tháng: -> ngày hôm sau +1 vào ngày như thường
 *          -> Nếu tháng 5,7,10,12 -> hôm qua. ngày = 30, tháng = tháng - 1;
 *          -> Nếu tháng 1,2,4,6,8,9,11 -> Hôm qua, ngày = 31, tháng - 1.
 *          -> Nếu tháng 3 -> Hôm qua = 28 hoặc 29, tháng = 2
 * 
 *      -> Nếu cuối tháng: hôm qua -1 bình thường
 *          -> Nếu tháng 1,3,5,7,8,10,12 -> Nếu ngày = 31 -> Ngày mai ngày = 1 , tháng +1
 *          -> Nếu tháng 4,6,9,11 -> Néu ngày = 30 -> Ngày mai ngày = 1 , tháng + 1
 *          -> Nếu tháng 2 -> Nếu 28 hoặc 29 -> Ngày mai ngày = 1  tháng = 3
 * 
 *      Kiểm tra đầu năm: Hôm sau +1 bth
 *          -> Hôm qua ngày = 31, tháng = 12, năm = năm - 1
 *      
 *      Kiểm tra cuối năm: Hôm qua -1 bth
 *          -> Hôm sau ngày = 1, tháng = 1, năm = năm + 1     
 * 
 * 
 * 3. Đầu ra:
 *      Xuất ra màn hình ngày hôm qua hoặc ngày hôm sau
 */


//Tính ngày hôm qua
document.getElementById("btnTruoc").onclick = function(){
    var ngay = document.getElementById("ngay").value*1;
    var thang = document.getElementById("thang").value*1;
    var nam = document.getElementById("nam").value*1;

    var ngayTruocSau = "";

    if(thang == 5 || thang == 7 || thang == 10 || thang == 12){
        //đầu tháng
        if(ngay == 1){
            ngay = 30;
            thang -= 1;
        }
        //ngày khác
        else{
            ngay -= 1;
        }
    } 
    else if(thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang == 11){
        //đầu tháng
        if(ngay == 1){
            ngay = 31;
            thang -= 1;
        }
        //ngày khác
        else{
            ngay -= 1;
        }
    }
    else if(thang == 3){
        //năm nhuận hay ko
        if(nam % 4 == 0 && nam % 100 > 0 || nam % 400 == 0){
            //đầu tháng
            if(ngay == 1){
                ngay = 29;
                thang = 2;
            }
            // ngày khác
            else{
                ngay -= 1;
            }
        }
        else{
            //đầu tháng
            if(ngay == 1){
                ngay = 28;
                thang = 2;
            }
            // ngày khác
            else{
                ngay -= 1;
            }
        }  
    }
    else if(thang == 1){
        //đầu tháng 1 = đầu năm
        if(ngay == 1){
            ngay = 31;
            thang = 12;
            nam -= 1;
        }
        //ngày khác trong tháng 1
        else{
            ngay -= 1;
        }
    }

    ngayTruocSau = "<p>" + ngay + "/" + thang + "/" + nam + "</p>";

    document.getElementById("ngayTruocSau").innerHTML = ngayTruocSau;
}


//Tính ngày hôm sau
document.getElementById("btnSau").onclick = function(){
    var ngay = document.getElementById("ngay").value*1;
    var thang = document.getElementById("thang").value*1;
    var nam = document.getElementById("nam").value*1;

    var ngayTruocSau = "";

    if(thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10){
        //cuối tháng
        if(ngay == 31){
            ngay = 1;
            thang += 1;
        }
        //ngày khác
        else{
            ngay += 1;
        }
    } 
    else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
        //cuối tháng
        if(ngay == 30){
            ngay = 1;
            thang += 1;
        }
        //ngày khác
        else{
            ngay += 1;
        }
    }
    else if(thang == 2){
        //năm nhuận hay ko
        if(nam % 4 == 0 && nam % 100 > 0 || nam % 400 == 0){
            //cuối tháng
            if(ngay == 29){
                ngay = 1;
                thang = 3;
            }
            // ngày khác
            else{
                ngay += 1;
            }
        }
        else{
            //đầu tháng
            if(ngay == 28){
                ngay = 1;
                thang = 3;
            }
            // ngày khác
            else{
                ngay += 1;
            }
        }  
    }
    else if(thang == 12){
        //cuối tháng 12
        if(ngay == 31){
            ngay = 1;
            thang = 1;
            nam += 1;
        }
        //ngày khác trong tháng 12
        else{
            ngay += 1;
        }
    }

    ngayTruocSau = "<p>" + ngay + "/" + thang + "/" + nam + "</p>";

    document.getElementById("ngayTruocSau").innerHTML = ngayTruocSau;
}



/**
 * Bài tập thêm 2:
 *  Tính số ngày trong tháng
 * 
 * 1. Đầu vào:
 *  Nhập vào tháng (list giá trị 1-12), năm
 * 
 * 2. Xử lý:
 *  Nếu tháng 1 3 5 7 8 10 12 -> 31 ngày
 *  Nếu tháng 4 6 9 11 -> 30 ngày
 *  Nếu tháng 2 
 *      Nếu năm nhuận 
 *          Thỏa 1 trong 2 điều kiện
 *              a. Chia hết cho 4 và không chia hết cho 100
 *              b. Chia hết cho 400
 *                  Đúng -> 29 ngày
 *                  Sai -> 28 ngày
 *      
 * 
 * 3. Đầu ra:
 *  Xuất số ngày ra màn hình
 */

document.getElementById("btnSoNgay").onclick = function(){
    var thangNgay = document.getElementById("thangNgay").value*1;
    var namNgay = document.getElementById("namNgay").value*1;

    var soNgay;
    var resultNgay ="";

    if(thangNgay == 1 || thangNgay == 3 || thangNgay == 5 || thangNgay == 7 || thangNgay == 8 || thangNgay == 10 || thangNgay == 12){
        soNgay = 31;
    }
    else if(thangNgay == 4 || thangNgay == 6 || thangNgay == 9 || thangNgay == 11){
        soNgay = 30;
    }
    else if(thangNgay == 2){
        if(namNgay % 4 == 0 && namNgay % 100 > 0 || namNgay % 400 == 0){
            soNgay = 29;
        }
        else{
            soNgay = 28;
        }
    }

    resultNgay += "<p>" + soNgay + " ngày</p>";

    document.getElementById("soNgay").innerHTML = resultNgay;
}


/**
 * Bài tập thêm 3:
 *  In ra cách đọc của số nguyên có 3 chũ số
 *  
 * 1. Đầu vào:
 *  Nhập vào số nguyên có 3 chữ số: int
 * 
 * 2. Xử lý:
 *  tram = int/100 
 *  chuc = int%10/10
 *  donvi = int%10
 * 
 *  Nếu số hàng trăm -> đọc là "số + trăm"
 *  Nếu số hàng chục -> đọc là "số + mươi"
 *  Nếu số hàng đơn vị -> đọc là "số" -> Nếu 0 thì không đọc
 * 
 * 3. Đầu ra:
 *  Xuất số
 */

document.getElementById("btnInt").onclick = function(){
    var int = document.getElementById("int").value*1;

    var tram = Math.floor(int/100);
    var chuc = Math.floor((int/10)%10);
    var donvi = int%10;

    tram.toString();
    chuc.toString();
    donvi.toString();

    var readInt = "";

    switch(tram){
        case 1:
            tram = "Một trăm";
            break;
        case 2:
            tram = "Hai trăm";
            break;
        case 3:
            tram = "Ba trăm";
            break;
        case 4:
            tram = "Bốn trăm";
            break;
        case 5:
            tram = "Năm trăm";
            break;
        case 6:
            tram = "Sáu trăm";
            break;
        case 7:
            tram = "Bảy trăm";
            break;
        case 8:
            tram = "Tám trăm";
            break;
        case 9:
            tram = "Chín trăm";
            break;
        case 0:
            tram = "";
            break;
    }

    switch(chuc){
        case 1:
            chuc = " mười";
            break;
        case 2:
            chuc = " hai mươi";
            break;
        case 3:
            chuc = " ba mươi";
            break;
        case 4:
            chuc = " bốn mươi";
            break;
        case 5:
            chuc = " năm mươi";
            break;
        case 6:
            chuc = " sáu mươi";
            break;
        case 7:
            chuc = " bảy mươi";
            break;
        case 8:
            chuc = " tám mươi";
            break;
        case 9:
            chuc = " chín mươi";
            break;
        case 0:
            chuc = "";
            break;
    }

    switch(donvi){
        case 1:
            donvi = " mốt";
            break;
        case 2:
            donvi  = " hai";
            break;
        case 3:
            donvi  = " ba";
            break;
        case 4:
            donvi  = " bốn";
            break;
        case 5:
            donvi  = " năm";
            break;
        case 6:
            donvi  = " sáu";
            break;
        case 7:
            donvi  = " bảy";
            break;
        case 8:
            donvi  = " tám";
            break;
        case 9:
            donvi  = " chín";
            break;
        case 0:
            donvi  = "";
            break;
    }

    readInt += "<p>" + tram + chuc + donvi + "</p>";

    document.getElementById("readInt").innerHTML = readInt;
}


/**
 * Bài tập thêm 4:
 * In tên sinh viên xa trường nhất.
 * 
 * Đầu vào:
 *  Nhập tên 3 sinh viên
 *  Nhập tọa độ x, y của 3 sinh viên (x1y1, x2y2, x3y3)
 *  Nhập tọa độ xtr, ytr của trường
 * 
 * Xử lý:
 *  Tính đoạn đường trường -> nhà sv1, sv2, sv3 (gọi là d1, d2, d3)
 *  Công thức: d = math.sqrt(math.pow((xtr - x),2) + math.pow((ytr - y),2))
 *  
 *  Nếu d1 > d2 && d1 > d3 -> quãng đường dài nhất = sv1
 *  Nếu d2 > d1 && d2 > d3 -> quãng đường dài nhất = sv2
 *  Nếu d3 > d1 && d3 > d2 -> quãng đường dài nhất = sv3
 * 
 * Đầu ra:
 *  In tên sv dài nhất
 */

document.getElementById("btnXaNhat").onclick = function(){
    var ten1 = document.getElementById("ten1").value;
    var ten2 = document.getElementById("ten2").value;
    var ten3 = document.getElementById("ten3").value;

    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    var xtr = document.getElementById("xtr").value;

    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var y3 = document.getElementById("y3").value;
    var ytr = document.getElementById("ytr").value;

    var d1 = Math.sqrt(Math.pow(xtr - x1,2) + Math.pow(ytr - y1,2));
    var d2 = Math.sqrt(Math.pow(xtr - x2,2) + Math.pow(ytr - y2,2));
    var d3 = Math.sqrt(Math.pow(xtr - x3,2) + Math.pow(ytr - y3,2));

    var tenXaNhat = "";

    if(d1>d2 && d1>d3){
        tenXaNhat += "<p>" + ten1 + "</p>";
    }
    else if(d2>d1 && d2>d3){
        tenXaNhat += "<p>" + ten2 + "</p>";
    }
    else if(d3>d1 && d3>d2){
        tenXaNhat += "<p>" + ten3 + "</p>";
    }
    else if(d1 == d2 && d1 > d3){
        tenXaNhat += "<p>" + ten1 + "</p>";
        tenXaNhat += "<p>" + ten2 + "</p>";
    }
    else if(d1 == d3 && d1 > d2){
        tenXaNhat += "<p>" + ten1 + "</p>";
        tenXaNhat += "<p>" + ten3 + "</p>";
    }
    else if(d2 == d3 && d2 > d1){
        tenXaNhat += "<p>" + ten2 + "</p>";
        tenXaNhat += "<p>" + ten3 + "</p>";
    }
    else{
        tenXaNhat += "<p>" + ten1 + "</p>";
        tenXaNhat += "<p>" + ten2 + "</p>";
        tenXaNhat += "<p>" + ten3 + "</p>";
    }

    document.getElementById("tenXaNhat").innerHTML = tenXaNhat;  

}

