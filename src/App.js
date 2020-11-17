import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import CardDisplay from "./components/CardDisplay";
import { FormControl, Select, MenuItem, Avatar } from "@material-ui/core";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: {
        code: "worldwide",
        name: "Worldwide",
        flag: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPEBAPEA8PDw8PDw8NDw8QDw0PFhUWFhURFRcYHSggGBolGxUVITEiJSkrLi4uFx8zODMtQygtLisBCgoKDg0OGxAQGy0gICUtLy0tLS0tKy0yLzIvLS0vLTArLi0tLS0tKy0uLS0tKy0tLS0vLS0tLS0tLSstLy0tL//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAcFBv/EAD8QAAIBAgIHBQUGBQMFAQAAAAABAgMRBCEFBhIxQVFhInGBkaETMlKxwQcjQmLR8BRDgqLhM2NyU3OywvFE/8QAGwEBAAEFAQAAAAAAAAAAAAAAAAQBAgMFBgf/xAA6EQACAQMBBQUHAwQCAQUAAAAAAQIDBBEhBRIxQVEGYXGBkRMyobHB0fAiQuEUM1LxI6JiFTRykuL/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAABmxuPo0FerUhTXDbkk33Le/Ax1KsKazNpFspxjxeD57Ga9YaGVONSs+DUdiHnLP0NfU2tQj7uX+d5HldwXDU8fEa+YiX+nRpQX53Oo/PL5EKe2aj92KXjr9jC7uT4JGCprXjpfztlcoU6dvVNkWW1bh/ux5Ixu4qPmKensY9+Iq+DS+SMT2jcf5st9tU6lo6cxi/wD0VfFp/Mp/6jcL97HtqnU00tZcdH+e2uUqdJ3/ALbly2rcr93wRcriouZvw+uWJXv06U10UoS87tehJhtyqvein8DIrufNI9bCa50ZZVKdSm+atUivKz9CbS23Rl76cfj+ehljdxfFYPcwWkqNf/SqQnxsnaS74vNGzo3NKsv+OSf50JEakZcGajMXgAAAAAAAAAAAAAAAAAAAAAAAAAAeVpjWDD4TKpPaqcKVO0p+Pw+NiLcXlKh7z16czFUrQhxPhtMa7Ymo7U9mhTbt2Hep4yf0StzLaVR39Kat96MorPBNS7lzT9TW1r2plcl8T56blOTlKUpSfvOT2nLq28zn3cUtxxnTzL/LelnPeuHljzMTTbzkiallspPfe/A2FlQ2dUpS/rG6TWMYby01xw0/VaamOcpp/p1GQ2r+5xV3dftmats3Zcae9G4eZJuKa48cZ00WeuC1VKmfdNKgcs9HgzkytFXs/BG02XsmptCWIzjFd718o8X8F3mOpUUERGsvh9ToX2MeNK//AE//AEYf6ruHQqRfNd6/Q11bslfQ9xxl4PD+KXzMiuYPiOgk92ZpL3Zl3ZpSrw3U9Fqn8mzLGpGXBl1TNdvF5ZUuPFZpremFNp5RU9jR+ncRRsnL2sPhq5vwlv8AO5tLfbNelpJ7y7/v98maFece8+m0bpyjXtG/s6j/AAT4v8r3P59DorTalC40TxLo/p1JlOvGenBnqGxMwAAAAAAAAAAAAAAAAAAAArE4iFKDqVJKEIq7lJ2SLZzjCO9J4RSUlFZZ8BrHrjUq3pYWTo0806tvvZr8vwL17jW09uUadTLp768cfDDNbcXE5rdpvHfz/g+Lm6m1dtyV7u1rvnfi2T6VXY9xSmoJQqST1qZer55eVx/0a5qqnl6ruNEM88/FNfM5G4t5UJbsmn4SUvk38SQpZL8dm0u9L6mys7FxhG7c6Tiv2zb9HHGc9MZ5PUxynru6l8PTlHJ2as7c077vmZ9t3Njdw/qKKxU3kn3pR445Lgk9M9C2lGcdHwHOErqzVuKfzIlhW2c7edK5g1PVqer15LC4fFPnjQump7ycfQbKSja/Ej7N2Pc7QUpUsJR5vK8lo/PyKzqRhxG0mnuZg2hs252fNKssZ4NPKeOngXQnGfAXWoW7S3cVy6nadmtuO4X9NcSzNe63+5dH1a+K7024telj9UeBSMTryMa8LTe/g8jju1t3aOh/TTk/aLEkks9Vq9Fh68888Eq2hLO9yNSieb5J5ZRKAtYyUqFWs8UouT7k38g2lxKynHv7szfWnZa/rvM0qa6t6+i19cGGVeC7zfo3WarQaU06tLk395Bflb39z80d5Q2PGlQVNTbkub5/bu6LqKW0Zwf6llfFH2WAx1PEQVSlJSi8st8Xya3pkCrSnTluzWDc0qsKsd6DyjSYzIAAAAAAAAAAAAAAAYdL6VpYWm6lV9IxXvVJckjBXuIUIb0zHUqRgss5jpzTdXGT2qjtBPsUovsQ/V9fluOWurypcS/Vw5I1lSrKo8s8tsjGMEgVGxRYyg2KKJOTwlllCfaxXHyzNzb9ndoV/wBm6usnj4cfgY5VoLmMjWjbfa/TNEun2avadx7kZxX+Twn6Pe/Nehb7eDXHBWhC7blGUl8WZ1G1KroUo0ravToSX7Xu/wA4/wDrr1RgprLzJNmym4Lc0vT5nHX2zdtXM1KvFzxwacWvLDxqSYTpR4aBUqr8Lu+OWRt9g9nZxk6l5Txhpx/U85XcnjHo/Ix1q64QYmKO6IZuwr7NuT/yeZ9sbeULyNXlKPxXFemDY2rzDA2ctlX8urNLsjZc9o3HsovCSy30X3fL+DNUmoRyIdWT6dx6NadnNn2y9zffWWvw4eiIUq83zwVN1GKisRWEYuIFQUmXIoyuExtXDVPa0ZbMvxJ5wqL4ZLii2rRhVjuzRWlWnRlvQf53nQtX9O0sZC8exVil7Sk3dx6rnHr8jnrm1lQlrquTOhtrqNeOVo+a/OR6xGJQAAAAAAAAAAAGHTGk6eFpOrUfSMV71SXCKMFxcQoQ35GOpUUI5ZyvS2k6mKqOrUee6MV7tOPwxOTuLidee9L/AEauc3N5ZhbMJYCBUvFFrKDYotYKYqMna3u8bc+p2XZOpaQ399pVW9M9Mcu/OcrjwItwpPhwEwR3RENWEppyz4K/eabb19Us7KVSn7zaSfTPP0zjvMtGKlLDPSijyWUnJtvVs2BHsE5OTz3ZeB0kO0lWjs+FtQyprOZPHDLaUePLCy+CWnVYfYJzcmJnFKTS3X/aPQ9nVqla0pVKnvOKb819SHUSUmkSkSy1DYSazREu7Ohd0/Z14qS/NU+KfgZIScXlFpVHLfwMNjsy2sU1QjjPHVtv1Lp1JT4gTi0koCACsi4oJqIuRYxMJ1MPONanLZqQd016p810NHabatNoVpW1NNrDeXonjHDnz04GfcqUcVE8M6Vq1p2GNp7StGrCyq07+6/iXOL4Ee6tpUJY5cmb61uo1454NcV+cj2CKSgAAAAAAAAVisRClCVSclGEE5Sb4ItlJRi5PgtfQpKSiss5Tp/S88XVdSV1BXVKHwR/V8f8I5C8upXFTefDkjU1ajqSyzy2yMYypUqWiGUGxRYwNiWsoMii1givBtJJJ578sjqezV9SoSqSuKrjGMdItvD64XNrGi7zBXi5YwjTSgoqy/8AvU0W0dpV72rKc5PDekc6Jclj811MsIKKwh0TXMyF0W5Kla8Fa738HzfI6zsve339TGhB71Pi0+CXVPlryWjb81guIQ3d58RCPSCCixQuLJFASCoFABUoUZUC5lyLGUqRus+PyPONqXNvY7SU7OOJR97o2+KS5acceXAnU4ynTxMRo/F1MLWjWpuzi7NcKkXvi1yf73HQXvaKzdvHCcnJZxwx4vk8+OfBllCFSnU3lpj4nWtF6QhiaUa1N9mSzT3wlxi+qIdGtGtBTjzOhhNTjlGsyl4AAAAAAHOdeNP+2rPCU3elR/1mt061/c7o5+N+Rg2tD2Fkqu84zclu4eOGfz06mqurjfqeyXBcfH+PzgfLJWSV27cXvZyVxW9tVlU3VHL4LRLwMEVhYK3MZcBQF4lGUGxLWUGxLWBsS0DIloGRKFS9r8X4O1ybYXUaEtYRbbS3prKjrq8cPPljQpKOeYi01m3JK/xXt6npNKeyrqW5RjTnNLON1fPBBaqR1eUjRtQta753d278zT0bXbcb1XDjBL3XFNY3c5wu/mn17tDM5UdzdyJR2RFLIoXFigJAAAhsqCjBRi5FyLWQndb81wOI7TUq1FyqQpQcJJZnupyT4at8OWGl55Jdu09G3noZa8Ti4slnr6nab/ha2xN/cVWozvuhL8M/o+ncbXZ137Ge7L3X8O/7mehV3JYfBnUDqDZAAAAAHja26Z/gsLOqre0l93RT41HufgrvwJNpQ9tVUeXMjXdf2NJy58vE5PShsrNtyfam27tye+7OS21tB3ty2vcjpHw6+fywuRqaUN2OvHmS2apGUqVBIBeJayg2Jayg2JawMiWgZEoCtSvbJZv0R1+xezMq2K12sR5R5vx6L4vu5x6tfGkSscRLn6R/Q6Z9nNmN59kvWXyzgwe3qdSzm3vdzZW1nQto7tGCj4L59SyU5S4stEklC6LSpYoXFkUAAAAVKghlUUIjC/caPbW247NUEo70pcs4wlz4Py8zJSo+0yUlTSzzOUv+1NW7oSoqmoqWjeW/TgSIW6i85MteSQ2P2dqXkPbVJbkOXV/Zd/wFWuoPC1ZinUz3epvKnZKg4/oqST70n8sGJXT5o6hqPpf+Iw+xJ3q0LQlffKH4JeSa8Oo/o69tFQq4fRrn/PU3VncqrDHNH0ZaTAAAA5P9o2lvbYtUk708L2ctzqOzm/DKP9LN9Y0N2g3zl+L7nP7Qr79bd5R+fP7HkyZ5S4ShJxksNaMyoW2CpABKAGRKFBkS1gbFlpQZEtKCsTVaeysrq9+J2/ZbZlvUp/1U1vSUmknwWMPK6vXjy5LOpGr1GnuoVBnbkUdFgDIgDIgF4lpci6KFxNwCSgIuVBUFCrZcULU5rd1ucb2q2VXuHC4oxcsLDS48cppc+efLyk21SMcxZSpJLecna7Gvbme5Cm13tNJeLf8AvuJMqsI8WYqkG7vdfmej1tr2FjFUnNfpWEo6vTw0Xm0QFSnN5wZKtPqiLb9p7StUVNRmm3hZS5+DZe7aSWdD1tUNJrDYmnNtqE37Kpy2JNdp9zs/Bk+/o3NWSUN3cSy+O9nXRcsGSyrRpVE3z0OumjOkAAy6Uxqw9CrXlupU5Tt8TSyj4uy8TJSpupNQXNmOrUVODm+SOD16kpSlKTvKTcpSe+Um7t+Z1aSSwjk223l8TThKvZab93i+T3fU4XtFsycryM6Ky6ienfFa+qx4vJNoVFu4fIczk8YJIXBUEwC8WUKDIstZQbFloFVcXa6jvWTb4dx2WyOzMakI17l5TSaiujWVvP6L15EWrXw8REKV83mzt4QjTiowWEuCWiIreeI6DLig6DAGxYBeLAGxZQqiyLS4kFQAIBQhsqUKtlSgQhfN+C5nLdoNvuzfsKHvtav/ABzw05vx0XeSKFHe/VLgEmcDUvbmqmp1JNPk5P5ZJijFcEZqhiRcZapKtqzo1YVUs7rT9Hktkspozxj+2d1bdqreWlaLh3rVfR/BkOVq+Tydh1XxzxGEo1G7zUdifNzj2W332v4llSpSnJyovMXwx+cjf2s3OknLjz8j1SwkHyH2m4zYwkaS316sU1+SHaf9yh5my2ZDNVy6L56fc1u1J4pKPV/LX7HKZG9NCWw8s9l7ppxfju/fU1m1oT9gq1NZlTamu/HFeayZKTW9h89DRhZuzi98HbvXD99xx3aC1gpxu6PuVFnz4/Hj45JdCTw4vih1zniQVnNRTb4Euys53deNGHPn0XN/ngWzkoRyzI8TJu97dEeiW+w7GjDd9mpd8tW/t5YNfKtNviS60pb2/kiZbWNvbLFGCj+dXqWSnKXFmrBVO1Zt5rJXyvkaftLae1s3KEctNPRa41T7+eplt5YnqwqvtS72bTZakrKipcdyPyMdT32TFk4sGwYA+DAGxYAxMAZFgF0yhdktcpgrkLjAIbBQq2VKFd+4xXFxSt6bq1XiK4v8+CKxi5PCGvJWPItqXcbu7nXimlJ6Z46JL6Gzpx3YqIqbISLjPUZkRQy1DIipnTzL+QOgfZri8q9F8HGrFd/Zl8oG72NU0lDzJlpLjE+3N2TTmf2pYjaxFGlwp0XPxnJp+kEbzZcMU3Lq/l/s0W1Z5qRj0Xz/ANHw8jZmsFSAJjXaltb3ufVGvuNm0a1q7ZLEeXc85WPD5aGSNRqW8eipXSfPM8wrUXRqSpy4xbWnDQ2SeVkz415Lv+h1HZOEfa1Jc0kvV6/JEa691GVM7chDdlremu9GGnc0asnGnNSa4pNPHoXOMlq0WizMWjIsAbFgDIsAdCQA6EgBsWAXTALqQBZSGCuSblARcqCrYKDoRsur3/oeZdpdqO6uPYwf6IPHjLm/LgvN8zY29Pdjl8WVkzmzMKmy5Az1GXooZqjMiKmd7zIVPptQsRsYymuFSFSm/LaXrFE7Zk924S6pr6/Qy27xUR1I6c2ZyHX6rtY+vyh7KC7vZxfzbOjsI4t4+fzObv5ZuJd2F8D5mRMIYqQAtgGuli1ulk+a3M43aXZqbm6lq8513X9H98eJMp3KxiQ2WzNWunxyaujUWv8AW7Kre1dN8MPKeGvFaGaShVWMhSoKLvm314GS/wC0FzdQ9nFKEXxxxfn08ClO3jB54lK23J7nZbsvU6PY8tn2dvFKrDekk5PeWc9O5Ij1lUnLg8IUmdERhkWAMiwBsWANjIAbGQA2MgBqkAWTAJUgCVIAm4BCeavuuYbiNSVKUaTxJp4fR40KxaTWTRJnii4G3FyZVIoJmy5FBE2XoGaozIipne8yFT1tXKuxisPL/fpJ9zkk/Rsy2st2vB96K03ia8Tsh15tzjOt7vjsS/8Ada8kl9Dp7T+xHwOYvP78/H6HhyJBGEyAFsAqAQAMp15Ljfo80a+72Xa3S/5ILPVaP1++TJCrOPBm+hWUlfzXI4DauzZ2NXcbzF+6+v8AK5mxpVFUWTLN5vvfzPSbaanRhKPBpfI1k1iT8S9NN7lfuK1rilQjvVZKK73gpGLlwWR6oy5eqNbHb2z5S3fafCSXq1gy/wBPUxwBM26aaytUYRkZADYyAGRkAMjMAYpAFrgEqQBO0AEXmu9GG5qulRnUSy1Fv0WSsVlpGhyPFUtDbC5MuKCZsuQETZegZ6jL0VEXzMhU3aMlarSfKpTf9yFLSpHxQXFHbTszcHGtbo2xuJ/7rfmkzp7T+xHwOYvP78/E8OSJBGEyAFMAqwCoAAFoytuy7ijipaNZKptcDRHELe4pvi+fU1VTZ1bclCjWcF+1JLEe7OM8eGqwuuDKqsc5lHPU3wlkuXA87uY1FVlGo96SbTeW+DxxZso4wsDFIwYKl0y+NarD3ZNeDaKOKZWdJPdk/RnRbL7RVaUlTuXvR6819115/IjVbdNZjoxVms2mdlRvratLcp1IyfRNEOVOUVlospEosGKQBdSALqYBZSALbQBDYA+NS/fxPLdu7JlY18xX/HL3X0/8fLl1XmbGjV313lZM0hlFTZcgImy9FTPUZkQElxcb9Gq9WmudSC/uQp/3I+KKLijtx2ZuDkevVLZx1flJ05LudOP1TOksXm3j5/NnNX0cXEvL5I+bmiWRBUkAKkALkAVYBAAJgDKUdp28+iIl7eQtKLqz5cF1fJfnLUvp03OW6j0kzy6cnOTlLi3l+Zt8YLqRZgF1IpgDFIpgoWUhGUoyUovDXBhoz1I7L6Pd+h6XsfaSvaGX760kvr4P55RrK1Lcl3ApG2MJdSALKQBdTALKQAbQAKdjFXoU69N0qqzF8V+fB8isZOLyi7rL/Bw1fslX9q1Rktzk5N58HhP+SYrmONeImdZEqh2Q1zVq+UV9X9i13XRGedRnR0dk2lGi6MYJxfHOrfi/l05YMDqzbzkW6l+Xqaa/2FY29tUqpPKWmvPl8TPTrzlJIiJxDJx6+r1PaxOHjzr0r920m/S5dbrNeC70ILM14nZjsDbnNvtLw9sTTqcKlFL+qMnf0lE3uy5ZpOPR/M0O1I4qqXVfL/Z8VNGyNaJmgBUkALkAUYBVgAAa8Lkr8zh+0teUrlUuUVnzfM2VpFKGeo9SObwSi6kUBdSKYKF1IpgoXUi0F7mSjWqUZqdKTi1zRbKKksMq6S4XR0Fv2puYLFWKn/1f1XwI0rWL4aFXSfDP5m9te0lnWe7PMH38PVfXBgnbTjw1KKR0CeSOWUgCykATtAEOQBVyAKSkAKkwCika7atlK8tnSjLD4ro8cn3GWlNQlljILM8xqwlTk4SWGtGjZ5TWUfU6i4fbxlJ8IKc34RaXq0Z9mw3rld2WZbdZqI6odSbM+R+0nCbeHp1Us6VSzfKE1Z/3KBs9lzxUceq+X4zV7Up5pqfR/P8AnBzKaN4aMRJACZIAXIAWwCoAMAdhp8PFHL9pLJzhG4jy0fhyfk/mTbSph7jNCZxuDYF0ymChdMoC6kWlC6kUKFlIoC6ZaULKRayhnrTu/TvPTth29ShZQjVby9cPknwX8cm2ayvJSm8FVI2xiJ2gCdoAhyAIcgCjkALkwClwDTh1fwOF7U2ihVjXj+7R+K+6+ROtp5ju9DoX2bYTOtWa3KNKL7+1JekDW7Gp6yqeX3+htLSOrkfdG9Jxi0zgv4jD1aOV5wajfcp74vwkkzLQqezqKfQxV6ftKcodV/o4tWg07NWayae9PkdUcoZpoARJACpIAWwCrAKsFSEy2cIzi4yWU9GE2nlGunUujzjaVhKzrOD916xfVfdc/XmbejVVSORiZrjKXTKAumUKF0y0oWTKFC6ZQFatWy6v0Oh7PbNjc1XWqe7Dl1fLyXHv07yNc1d1YXFiEzvzXE3AJ2gA2gCHIAhyAKNgFGwCYoA3YWBxna27WIW64+8/il66/Al20eMjr2qWB9hhKSatKa9rLhnLNX6qOyvAjbPo+yoRXN6vzN/bw3aa9T2SaZgAOW68aM9jipSS7Fe9WP8Ayfvrzz/qR0VhW9pRSfFafb87jnL+j7Os2uD1+/53ny04k0hGeaAEyQAtoAowCrAKgqTGTWaMFxbUriHs6qyvzh0ZdCcoPMTRTq37zidq7GdnH2sJb0c414r6P4eBsaNx7R4a1HJmjJJZMtKF0y0MumUKFkyhQViJbvH6HZdlISUKs+TaXms5+aIN49UhaZ1pDJTAJuAFwCLgENgFWwCEAOpRAPotWNG/xNelSt2b7VTpTjnLzyXijg9u27q7UjF8N1PyWTZWUN/Ee86+TTfAAAB4mt2iv4nDvZV6tL7ynbfK3vQ8V6pEyxr+yq68HoyHfUPa0tOK1RyarA6M5syVIgCJoATJAFGAVYBDQBWwKl6Lz8zUbdjmxn3Yf/ZGe1eKqNKZ56bUsmUBdMtKFkyhQidZLq+SN1s/YVe6xKf6IdXxfgvq9PEj1biMNFqxLm27s723t6dvTVKmsJfnqa6UnJ5YXMxaSmATcALgEXAIuASAWigDXQgAdQ1A0V7Kg68l269nG/4aS3ee/u2Tn9pTjOtotYrGfob7ZtFwp775/L+fsfVEA2QAAAABzbXbQvsKvtYL7ms28t0Ku+UfHevHkdBYXHtIbr4r5HPbQtvZz31wfz/NT5KrTJ5AMlSABnmgBTQBDQBUALAE01mvH5Gt2ws2NTw+qM1v/dQ9HnDNuWRRgsi0oE5WT7jabFo+1vqaxlLV+S++DDcS3abMqZ6QaksmATcAtcAm4AXAAAlAFkgB9KAB9JqpoV4uuotfdQtOs/y8I98mrd13wI13cexp55vh+dxKtLf29THJcfzvOtRSSSSslkksklyOZ4nTEgAAAAAGbSOChiKU6VRXjNWy3xfCS6p5mSlVlTmpx5GOrSjVg4S4M5PpfRk8NVlRqLNZxkt048JLp/lHTUa0asFOJzFajKlNwkeTVpGUxGWpTAM0oAFHEAjZAIaAJprNePyNftb/ANlV8DNQ/uRHI82ZtiUWgt+8zLRt61Z4pRcvBNlspRjxeBNWd8lu+Z2+w9lStIupV9+XLouni+Zrrisp6LgLN+RiQCQCUASASgCyQBZADIRAPS0fg51ZxpU47U5vZiuvN8kt7fQtnOMIuUuCLoQlOSjHizr2gNEwwdGNKOcveqTt/qTe993BdEczc13WnvPyOmtqCow3V597PSMBIAAAAAAAADytYdCwxlPZdo1I3dKp8L5P8r4/4JNrcyoSzy5oi3VtGvHD4rg/zkcux2DnRnKlUi4zi7NP5rmup0kJxnFSi8o5ypTlTk4yWGYKlIuLDLUpACZUwBbgAVcQCYRzIG1Fmzq//FmWj/cQyx5k2bYmxfTpzqzUILLfBIo5JLLF1ZJ2sdzsLZtzZ77qtYljRPOq+HozXXFWM8YFWOgIxNgAACwBawBNgCUAWSAGQiAbMLh5TlGMYuUpNKMYq7k3uSKNpLLKpOTwuJ1bVLVxYOG3OzxE12ms1Tj/ANOP1fHwRz95dus8R91fHvOhsrNUVvS95/DuR9CQScAAAAAAAAAAAB5On9B08ZCz7NWK+7qJXcej5x6Eq2upUJaarmiLdWsa8ddHyf5yOZ6T0dVw83Tqx2ZcHvjNfFF8UdDSqwqx3oM52rSnSluzX53GCdO5kMZnnSAEypgC3AAqo5rvMNxT9rRnT6pr1WC6LxJMbsHkuTcFK0cvE6rsrCLrVJvikkvN/wAES7f6UhOydsQCNkANkANkAmwAWAJsAWSAGQpgG/R+BnWnGnTg5zlujH59F1ZbOcYR3pPCLoQlOW7FZZ1LVbVmGDjtztPESWc17tNfDD9ePTcaC7vHWe6tI/PxOgs7JUVvS1l8vA+hIJOAAAAAAAAAAAAAAAMmktHUsTB06sVJb090oP4ovgzLSrTpS3oMxVaMKsd2ayc909qvWw15xvVo79uK7UF+dfVZdxvba+hV0ej/ADgaG5sZ0dVrHr9/v8j59xJpCEzpACZUwBbgANULq/7ueY7atHa3cl+2X6l4P7PQ2dGpvRRStDLx/U2vZOX/ADVF/wCK+ZiuvdQhwO5IJGwARsABsgBsgBsgFlAAZCkAe/q/qzXxbTitilfOtNdn+lfifdl1RGuLunR46vp+cCTb2lSvw0XX7dTpuhNCUcHDZpR7Ttt1JWc6ne+XRZGgr3M6zzL0N/QtoUViPrzZ6RgJAAAAAAAAAAAAAAAAAAAAB89pnVKhXvKH3NR53guxJ/mj9VbxJ9DaFSnpL9S/OZAr7Pp1NY/pf5yPitKauYnD3cqbnBfzKV5xt14x8UbejeUqvB4fRmorWdWlxWV1R5DiSSKLlTAKxjY1+0tm0r+luT0a4Pmn9uq+uGX06jg8otOmpLJ26M5qwoXOxqk3UoupGWP1Q1wlnljPq0SJyjVSw8GaVK2R2VKpGpBThweqIrWHhldgvKEbAAbABKpAFlSAPV0Tq/iMTb2VJuL/AJk+zSX9T3+F2YK1zSpe89enMz0barV9xadeX54ZPudC6j0KVp137efw2tRj4fi8cuhqa+0pz0p/pXx/j81NtQ2bCGtT9T+H8+fofVxikkkkklZJZJLka3ibMkAAAAAAAAAAAAAAAAAAAAAAAAAA8vSGr+Fr3c6UVJ/jp9ibfNtb/G5JpXdanpGWnfqRqtpRqayjr1Wh89jNQ1vo13/xrRv/AHRt8ifDav8AnH0/PqQJ7K/wl6/x9jxsTqfjIbqcanWlUj/7WZKjtChLnjxX2yRJ7Prx5Z8H98HnVtCYmPvYev3qlOS80rGeNxSfCS9TBK3qx4xfozNLAVFvp1F305r6GT2kXzXqWezmuT9GVWAqPdTqPuhJ/Qb8eq9R7OfR+g6loTEy93D1319lNLzasWOvSXGS9UXKhVfCL9GehhtTsbP+UoLnUnBLyTb9DBK/oR/dnwRnjYXEv248Wv5PYwX2fyydavFc40Yt+UpW/wDEiz2qv2R9ft/JKp7Kf75en3f2PotH6rYOhZqkqkl+Ot94787Psp9yINW+rVOeF3afyT6VjRp6pZffr/B7SIhLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
      },
      countries: [],
      data: {
        total_deaths: 0,
        new_deaths: 0,
        total_cases: 0,
        new_cases: 0,
        total_recovered: 0,
        new_recovered: 0,
      },
    };
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount() {
    const getCountriesData = async () => {
      var c = [];
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          c = data.map((country) => ({
            name: country.country,
            code: country.countryInfo.iso3,
            flag: country.countryInfo.flag,
          }));
          this.setState({
            countries: c,
          });
        });
    };
    getCountriesData();

    const getRelevantData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((data) => data.json())
        .then((data) => {
          var c = {
            total_deaths: data.deaths,
            new_deaths: data.todayDeaths,
            total_cases: data.cases,
            new_cases: data.todayCases,
            total_recovered: data.recovered,
            new_recovered: data.todayRecovered,
          };
          this.setState({
            data: c,
          });
        });
    };
    getRelevantData();
  }

  onCountryChange(event) {
    const countryCode = event.target.value;
    if(countryCode === 'worldwide'){
      this.setState({
        country: {
          code: "worldwide",
          name: "Worldwide",
          flag: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPEBAPEA8PDw8PDw8NDw8QDw0PFhUWFhURFRcYHSggGBolGxUVITEiJSkrLi4uFx8zODMtQygtLisBCgoKDg0OGxAQGy0gICUtLy0tLS0tKy0yLzIvLS0vLTArLi0tLS0tKy0uLS0tKy0tLS0vLS0tLS0tLSstLy0tL//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAcFBv/EAD8QAAIBAgIHBQUGBQMFAQAAAAABAgMRBCEFBhIxQVFhInGBkaETMlKxwQcjQmLR8BRDgqLhM2NyU3OywvFE/8QAGwEBAAEFAQAAAAAAAAAAAAAAAAQBAgMFBgf/xAA6EQACAQMBBQUHAwQCAQUAAAAAAQIDBBEhBRIxQVEGYXGBkRMyobHB0fAiQuEUM1LxI6JiFTRykuL/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAABmxuPo0FerUhTXDbkk33Le/Ax1KsKazNpFspxjxeD57Ga9YaGVONSs+DUdiHnLP0NfU2tQj7uX+d5HldwXDU8fEa+YiX+nRpQX53Oo/PL5EKe2aj92KXjr9jC7uT4JGCprXjpfztlcoU6dvVNkWW1bh/ux5Ixu4qPmKensY9+Iq+DS+SMT2jcf5st9tU6lo6cxi/wD0VfFp/Mp/6jcL97HtqnU00tZcdH+e2uUqdJ3/ALbly2rcr93wRcriouZvw+uWJXv06U10UoS87tehJhtyqvein8DIrufNI9bCa50ZZVKdSm+atUivKz9CbS23Rl76cfj+ehljdxfFYPcwWkqNf/SqQnxsnaS74vNGzo3NKsv+OSf50JEakZcGajMXgAAAAAAAAAAAAAAAAAAAAAAAAAAeVpjWDD4TKpPaqcKVO0p+Pw+NiLcXlKh7z16czFUrQhxPhtMa7Ymo7U9mhTbt2Hep4yf0StzLaVR39Kat96MorPBNS7lzT9TW1r2plcl8T56blOTlKUpSfvOT2nLq28zn3cUtxxnTzL/LelnPeuHljzMTTbzkiallspPfe/A2FlQ2dUpS/rG6TWMYby01xw0/VaamOcpp/p1GQ2r+5xV3dftmats3Zcae9G4eZJuKa48cZ00WeuC1VKmfdNKgcs9HgzkytFXs/BG02XsmptCWIzjFd718o8X8F3mOpUUERGsvh9ToX2MeNK//AE//AEYf6ruHQqRfNd6/Q11bslfQ9xxl4PD+KXzMiuYPiOgk92ZpL3Zl3ZpSrw3U9Fqn8mzLGpGXBl1TNdvF5ZUuPFZpremFNp5RU9jR+ncRRsnL2sPhq5vwlv8AO5tLfbNelpJ7y7/v98maFece8+m0bpyjXtG/s6j/AAT4v8r3P59DorTalC40TxLo/p1JlOvGenBnqGxMwAAAAAAAAAAAAAAAAAAAArE4iFKDqVJKEIq7lJ2SLZzjCO9J4RSUlFZZ8BrHrjUq3pYWTo0806tvvZr8vwL17jW09uUadTLp768cfDDNbcXE5rdpvHfz/g+Lm6m1dtyV7u1rvnfi2T6VXY9xSmoJQqST1qZer55eVx/0a5qqnl6ruNEM88/FNfM5G4t5UJbsmn4SUvk38SQpZL8dm0u9L6mys7FxhG7c6Tiv2zb9HHGc9MZ5PUxynru6l8PTlHJ2as7c077vmZ9t3Njdw/qKKxU3kn3pR445Lgk9M9C2lGcdHwHOErqzVuKfzIlhW2c7edK5g1PVqer15LC4fFPnjQump7ycfQbKSja/Ej7N2Pc7QUpUsJR5vK8lo/PyKzqRhxG0mnuZg2hs252fNKssZ4NPKeOngXQnGfAXWoW7S3cVy6nadmtuO4X9NcSzNe63+5dH1a+K7024telj9UeBSMTryMa8LTe/g8jju1t3aOh/TTk/aLEkks9Vq9Fh68888Eq2hLO9yNSieb5J5ZRKAtYyUqFWs8UouT7k38g2lxKynHv7szfWnZa/rvM0qa6t6+i19cGGVeC7zfo3WarQaU06tLk395Bflb39z80d5Q2PGlQVNTbkub5/bu6LqKW0Zwf6llfFH2WAx1PEQVSlJSi8st8Xya3pkCrSnTluzWDc0qsKsd6DyjSYzIAAAAAAAAAAAAAAAYdL6VpYWm6lV9IxXvVJckjBXuIUIb0zHUqRgss5jpzTdXGT2qjtBPsUovsQ/V9fluOWurypcS/Vw5I1lSrKo8s8tsjGMEgVGxRYyg2KKJOTwlllCfaxXHyzNzb9ndoV/wBm6usnj4cfgY5VoLmMjWjbfa/TNEun2avadx7kZxX+Twn6Pe/Nehb7eDXHBWhC7blGUl8WZ1G1KroUo0ravToSX7Xu/wA4/wDrr1RgprLzJNmym4Lc0vT5nHX2zdtXM1KvFzxwacWvLDxqSYTpR4aBUqr8Lu+OWRt9g9nZxk6l5Txhpx/U85XcnjHo/Ix1q64QYmKO6IZuwr7NuT/yeZ9sbeULyNXlKPxXFemDY2rzDA2ctlX8urNLsjZc9o3HsovCSy30X3fL+DNUmoRyIdWT6dx6NadnNn2y9zffWWvw4eiIUq83zwVN1GKisRWEYuIFQUmXIoyuExtXDVPa0ZbMvxJ5wqL4ZLii2rRhVjuzRWlWnRlvQf53nQtX9O0sZC8exVil7Sk3dx6rnHr8jnrm1lQlrquTOhtrqNeOVo+a/OR6xGJQAAAAAAAAAAAGHTGk6eFpOrUfSMV71SXCKMFxcQoQ35GOpUUI5ZyvS2k6mKqOrUee6MV7tOPwxOTuLidee9L/AEauc3N5ZhbMJYCBUvFFrKDYotYKYqMna3u8bc+p2XZOpaQ399pVW9M9Mcu/OcrjwItwpPhwEwR3RENWEppyz4K/eabb19Us7KVSn7zaSfTPP0zjvMtGKlLDPSijyWUnJtvVs2BHsE5OTz3ZeB0kO0lWjs+FtQyprOZPHDLaUePLCy+CWnVYfYJzcmJnFKTS3X/aPQ9nVqla0pVKnvOKb819SHUSUmkSkSy1DYSazREu7Ohd0/Z14qS/NU+KfgZIScXlFpVHLfwMNjsy2sU1QjjPHVtv1Lp1JT4gTi0koCACsi4oJqIuRYxMJ1MPONanLZqQd016p810NHabatNoVpW1NNrDeXonjHDnz04GfcqUcVE8M6Vq1p2GNp7StGrCyq07+6/iXOL4Ee6tpUJY5cmb61uo1454NcV+cj2CKSgAAAAAAAAVisRClCVSclGEE5Sb4ItlJRi5PgtfQpKSiss5Tp/S88XVdSV1BXVKHwR/V8f8I5C8upXFTefDkjU1ajqSyzy2yMYypUqWiGUGxRYwNiWsoMii1givBtJJJ578sjqezV9SoSqSuKrjGMdItvD64XNrGi7zBXi5YwjTSgoqy/8AvU0W0dpV72rKc5PDekc6Jclj811MsIKKwh0TXMyF0W5Kla8Fa738HzfI6zsve339TGhB71Pi0+CXVPlryWjb81guIQ3d58RCPSCCixQuLJFASCoFABUoUZUC5lyLGUqRus+PyPONqXNvY7SU7OOJR97o2+KS5acceXAnU4ynTxMRo/F1MLWjWpuzi7NcKkXvi1yf73HQXvaKzdvHCcnJZxwx4vk8+OfBllCFSnU3lpj4nWtF6QhiaUa1N9mSzT3wlxi+qIdGtGtBTjzOhhNTjlGsyl4AAAAAAHOdeNP+2rPCU3elR/1mt061/c7o5+N+Rg2tD2Fkqu84zclu4eOGfz06mqurjfqeyXBcfH+PzgfLJWSV27cXvZyVxW9tVlU3VHL4LRLwMEVhYK3MZcBQF4lGUGxLWUGxLWBsS0DIloGRKFS9r8X4O1ybYXUaEtYRbbS3prKjrq8cPPljQpKOeYi01m3JK/xXt6npNKeyrqW5RjTnNLON1fPBBaqR1eUjRtQta753d278zT0bXbcb1XDjBL3XFNY3c5wu/mn17tDM5UdzdyJR2RFLIoXFigJAAAhsqCjBRi5FyLWQndb81wOI7TUq1FyqQpQcJJZnupyT4at8OWGl55Jdu09G3noZa8Ti4slnr6nab/ha2xN/cVWozvuhL8M/o+ncbXZ137Ge7L3X8O/7mehV3JYfBnUDqDZAAAAAHja26Z/gsLOqre0l93RT41HufgrvwJNpQ9tVUeXMjXdf2NJy58vE5PShsrNtyfam27tye+7OS21tB3ty2vcjpHw6+fywuRqaUN2OvHmS2apGUqVBIBeJayg2Jayg2JawMiWgZEoCtSvbJZv0R1+xezMq2K12sR5R5vx6L4vu5x6tfGkSscRLn6R/Q6Z9nNmN59kvWXyzgwe3qdSzm3vdzZW1nQto7tGCj4L59SyU5S4stEklC6LSpYoXFkUAAAAVKghlUUIjC/caPbW247NUEo70pcs4wlz4Py8zJSo+0yUlTSzzOUv+1NW7oSoqmoqWjeW/TgSIW6i85MteSQ2P2dqXkPbVJbkOXV/Zd/wFWuoPC1ZinUz3epvKnZKg4/oqST70n8sGJXT5o6hqPpf+Iw+xJ3q0LQlffKH4JeSa8Oo/o69tFQq4fRrn/PU3VncqrDHNH0ZaTAAAA5P9o2lvbYtUk708L2ctzqOzm/DKP9LN9Y0N2g3zl+L7nP7Qr79bd5R+fP7HkyZ5S4ShJxksNaMyoW2CpABKAGRKFBkS1gbFlpQZEtKCsTVaeysrq9+J2/ZbZlvUp/1U1vSUmknwWMPK6vXjy5LOpGr1GnuoVBnbkUdFgDIgDIgF4lpci6KFxNwCSgIuVBUFCrZcULU5rd1ucb2q2VXuHC4oxcsLDS48cppc+efLyk21SMcxZSpJLecna7Gvbme5Cm13tNJeLf8AvuJMqsI8WYqkG7vdfmej1tr2FjFUnNfpWEo6vTw0Xm0QFSnN5wZKtPqiLb9p7StUVNRmm3hZS5+DZe7aSWdD1tUNJrDYmnNtqE37Kpy2JNdp9zs/Bk+/o3NWSUN3cSy+O9nXRcsGSyrRpVE3z0OumjOkAAy6Uxqw9CrXlupU5Tt8TSyj4uy8TJSpupNQXNmOrUVODm+SOD16kpSlKTvKTcpSe+Um7t+Z1aSSwjk223l8TThKvZab93i+T3fU4XtFsycryM6Ky6ienfFa+qx4vJNoVFu4fIczk8YJIXBUEwC8WUKDIstZQbFloFVcXa6jvWTb4dx2WyOzMakI17l5TSaiujWVvP6L15EWrXw8REKV83mzt4QjTiowWEuCWiIreeI6DLig6DAGxYBeLAGxZQqiyLS4kFQAIBQhsqUKtlSgQhfN+C5nLdoNvuzfsKHvtav/ABzw05vx0XeSKFHe/VLgEmcDUvbmqmp1JNPk5P5ZJijFcEZqhiRcZapKtqzo1YVUs7rT9Hktkspozxj+2d1bdqreWlaLh3rVfR/BkOVq+Tydh1XxzxGEo1G7zUdifNzj2W332v4llSpSnJyovMXwx+cjf2s3OknLjz8j1SwkHyH2m4zYwkaS316sU1+SHaf9yh5my2ZDNVy6L56fc1u1J4pKPV/LX7HKZG9NCWw8s9l7ppxfju/fU1m1oT9gq1NZlTamu/HFeayZKTW9h89DRhZuzi98HbvXD99xx3aC1gpxu6PuVFnz4/Hj45JdCTw4vih1zniQVnNRTb4Euys53deNGHPn0XN/ngWzkoRyzI8TJu97dEeiW+w7GjDd9mpd8tW/t5YNfKtNviS60pb2/kiZbWNvbLFGCj+dXqWSnKXFmrBVO1Zt5rJXyvkaftLae1s3KEctNPRa41T7+eplt5YnqwqvtS72bTZakrKipcdyPyMdT32TFk4sGwYA+DAGxYAxMAZFgF0yhdktcpgrkLjAIbBQq2VKFd+4xXFxSt6bq1XiK4v8+CKxi5PCGvJWPItqXcbu7nXimlJ6Z46JL6Gzpx3YqIqbISLjPUZkRQy1DIipnTzL+QOgfZri8q9F8HGrFd/Zl8oG72NU0lDzJlpLjE+3N2TTmf2pYjaxFGlwp0XPxnJp+kEbzZcMU3Lq/l/s0W1Z5qRj0Xz/ANHw8jZmsFSAJjXaltb3ufVGvuNm0a1q7ZLEeXc85WPD5aGSNRqW8eipXSfPM8wrUXRqSpy4xbWnDQ2SeVkz415Lv+h1HZOEfa1Jc0kvV6/JEa691GVM7chDdlremu9GGnc0asnGnNSa4pNPHoXOMlq0WizMWjIsAbFgDIsAdCQA6EgBsWAXTALqQBZSGCuSblARcqCrYKDoRsur3/oeZdpdqO6uPYwf6IPHjLm/LgvN8zY29Pdjl8WVkzmzMKmy5Az1GXooZqjMiKmd7zIVPptQsRsYymuFSFSm/LaXrFE7Zk924S6pr6/Qy27xUR1I6c2ZyHX6rtY+vyh7KC7vZxfzbOjsI4t4+fzObv5ZuJd2F8D5mRMIYqQAtgGuli1ulk+a3M43aXZqbm6lq8513X9H98eJMp3KxiQ2WzNWunxyaujUWv8AW7Kre1dN8MPKeGvFaGaShVWMhSoKLvm314GS/wC0FzdQ9nFKEXxxxfn08ClO3jB54lK23J7nZbsvU6PY8tn2dvFKrDekk5PeWc9O5Ij1lUnLg8IUmdERhkWAMiwBsWANjIAbGQA2MgBqkAWTAJUgCVIAm4BCeavuuYbiNSVKUaTxJp4fR40KxaTWTRJnii4G3FyZVIoJmy5FBE2XoGaozIipne8yFT1tXKuxisPL/fpJ9zkk/Rsy2st2vB96K03ia8Tsh15tzjOt7vjsS/8Ada8kl9Dp7T+xHwOYvP78/H6HhyJBGEyAFsAqAQAMp15Ljfo80a+72Xa3S/5ILPVaP1++TJCrOPBm+hWUlfzXI4DauzZ2NXcbzF+6+v8AK5mxpVFUWTLN5vvfzPSbaanRhKPBpfI1k1iT8S9NN7lfuK1rilQjvVZKK73gpGLlwWR6oy5eqNbHb2z5S3fafCSXq1gy/wBPUxwBM26aaytUYRkZADYyAGRkAMjMAYpAFrgEqQBO0AEXmu9GG5qulRnUSy1Fv0WSsVlpGhyPFUtDbC5MuKCZsuQETZegZ6jL0VEXzMhU3aMlarSfKpTf9yFLSpHxQXFHbTszcHGtbo2xuJ/7rfmkzp7T+xHwOYvP78/E8OSJBGEyAFMAqwCoAAFoytuy7ijipaNZKptcDRHELe4pvi+fU1VTZ1bclCjWcF+1JLEe7OM8eGqwuuDKqsc5lHPU3wlkuXA87uY1FVlGo96SbTeW+DxxZso4wsDFIwYKl0y+NarD3ZNeDaKOKZWdJPdk/RnRbL7RVaUlTuXvR6819115/IjVbdNZjoxVms2mdlRvratLcp1IyfRNEOVOUVlospEosGKQBdSALqYBZSALbQBDYA+NS/fxPLdu7JlY18xX/HL3X0/8fLl1XmbGjV313lZM0hlFTZcgImy9FTPUZkQElxcb9Gq9WmudSC/uQp/3I+KKLijtx2ZuDkevVLZx1flJ05LudOP1TOksXm3j5/NnNX0cXEvL5I+bmiWRBUkAKkALkAVYBAAJgDKUdp28+iIl7eQtKLqz5cF1fJfnLUvp03OW6j0kzy6cnOTlLi3l+Zt8YLqRZgF1IpgDFIpgoWUhGUoyUovDXBhoz1I7L6Pd+h6XsfaSvaGX760kvr4P55RrK1Lcl3ApG2MJdSALKQBdTALKQAbQAKdjFXoU69N0qqzF8V+fB8isZOLyi7rL/Bw1fslX9q1Rktzk5N58HhP+SYrmONeImdZEqh2Q1zVq+UV9X9i13XRGedRnR0dk2lGi6MYJxfHOrfi/l05YMDqzbzkW6l+Xqaa/2FY29tUqpPKWmvPl8TPTrzlJIiJxDJx6+r1PaxOHjzr0r920m/S5dbrNeC70ILM14nZjsDbnNvtLw9sTTqcKlFL+qMnf0lE3uy5ZpOPR/M0O1I4qqXVfL/Z8VNGyNaJmgBUkALkAUYBVgAAa8Lkr8zh+0teUrlUuUVnzfM2VpFKGeo9SObwSi6kUBdSKYKF1IpgoXUi0F7mSjWqUZqdKTi1zRbKKksMq6S4XR0Fv2puYLFWKn/1f1XwI0rWL4aFXSfDP5m9te0lnWe7PMH38PVfXBgnbTjw1KKR0CeSOWUgCykATtAEOQBVyAKSkAKkwCika7atlK8tnSjLD4ro8cn3GWlNQlljILM8xqwlTk4SWGtGjZ5TWUfU6i4fbxlJ8IKc34RaXq0Z9mw3rld2WZbdZqI6odSbM+R+0nCbeHp1Us6VSzfKE1Z/3KBs9lzxUceq+X4zV7Up5pqfR/P8AnBzKaN4aMRJACZIAXIAWwCoAMAdhp8PFHL9pLJzhG4jy0fhyfk/mTbSph7jNCZxuDYF0ymChdMoC6kWlC6kUKFlIoC6ZaULKRayhnrTu/TvPTth29ShZQjVby9cPknwX8cm2ayvJSm8FVI2xiJ2gCdoAhyAIcgCjkALkwClwDTh1fwOF7U2ihVjXj+7R+K+6+ROtp5ju9DoX2bYTOtWa3KNKL7+1JekDW7Gp6yqeX3+htLSOrkfdG9Jxi0zgv4jD1aOV5wajfcp74vwkkzLQqezqKfQxV6ftKcodV/o4tWg07NWayae9PkdUcoZpoARJACpIAWwCrAKsFSEy2cIzi4yWU9GE2nlGunUujzjaVhKzrOD916xfVfdc/XmbejVVSORiZrjKXTKAumUKF0y0oWTKFC6ZQFatWy6v0Oh7PbNjc1XWqe7Dl1fLyXHv07yNc1d1YXFiEzvzXE3AJ2gA2gCHIAhyAKNgFGwCYoA3YWBxna27WIW64+8/il66/Al20eMjr2qWB9hhKSatKa9rLhnLNX6qOyvAjbPo+yoRXN6vzN/bw3aa9T2SaZgAOW68aM9jipSS7Fe9WP8Ayfvrzz/qR0VhW9pRSfFafb87jnL+j7Os2uD1+/53ny04k0hGeaAEyQAtoAowCrAKgqTGTWaMFxbUriHs6qyvzh0ZdCcoPMTRTq37zidq7GdnH2sJb0c414r6P4eBsaNx7R4a1HJmjJJZMtKF0y0MumUKFkyhQViJbvH6HZdlISUKs+TaXms5+aIN49UhaZ1pDJTAJuAFwCLgENgFWwCEAOpRAPotWNG/xNelSt2b7VTpTjnLzyXijg9u27q7UjF8N1PyWTZWUN/Ee86+TTfAAAB4mt2iv4nDvZV6tL7ynbfK3vQ8V6pEyxr+yq68HoyHfUPa0tOK1RyarA6M5syVIgCJoATJAFGAVYBDQBWwKl6Lz8zUbdjmxn3Yf/ZGe1eKqNKZ56bUsmUBdMtKFkyhQidZLq+SN1s/YVe6xKf6IdXxfgvq9PEj1biMNFqxLm27s723t6dvTVKmsJfnqa6UnJ5YXMxaSmATcALgEXAIuASAWigDXQgAdQ1A0V7Kg68l269nG/4aS3ee/u2Tn9pTjOtotYrGfob7ZtFwp775/L+fsfVEA2QAAAABzbXbQvsKvtYL7ms28t0Ku+UfHevHkdBYXHtIbr4r5HPbQtvZz31wfz/NT5KrTJ5AMlSABnmgBTQBDQBUALAE01mvH5Gt2ws2NTw+qM1v/dQ9HnDNuWRRgsi0oE5WT7jabFo+1vqaxlLV+S++DDcS3abMqZ6QaksmATcAtcAm4AXAAAlAFkgB9KAB9JqpoV4uuotfdQtOs/y8I98mrd13wI13cexp55vh+dxKtLf29THJcfzvOtRSSSSslkksklyOZ4nTEgAAAAAGbSOChiKU6VRXjNWy3xfCS6p5mSlVlTmpx5GOrSjVg4S4M5PpfRk8NVlRqLNZxkt048JLp/lHTUa0asFOJzFajKlNwkeTVpGUxGWpTAM0oAFHEAjZAIaAJprNePyNftb/ANlV8DNQ/uRHI82ZtiUWgt+8zLRt61Z4pRcvBNlspRjxeBNWd8lu+Z2+w9lStIupV9+XLouni+Zrrisp6LgLN+RiQCQCUASASgCyQBZADIRAPS0fg51ZxpU47U5vZiuvN8kt7fQtnOMIuUuCLoQlOSjHizr2gNEwwdGNKOcveqTt/qTe993BdEczc13WnvPyOmtqCow3V597PSMBIAAAAAAAADytYdCwxlPZdo1I3dKp8L5P8r4/4JNrcyoSzy5oi3VtGvHD4rg/zkcux2DnRnKlUi4zi7NP5rmup0kJxnFSi8o5ypTlTk4yWGYKlIuLDLUpACZUwBbgAVcQCYRzIG1Fmzq//FmWj/cQyx5k2bYmxfTpzqzUILLfBIo5JLLF1ZJ2sdzsLZtzZ77qtYljRPOq+HozXXFWM8YFWOgIxNgAACwBawBNgCUAWSAGQiAbMLh5TlGMYuUpNKMYq7k3uSKNpLLKpOTwuJ1bVLVxYOG3OzxE12ms1Tj/ANOP1fHwRz95dus8R91fHvOhsrNUVvS95/DuR9CQScAAAAAAAAAAAB5On9B08ZCz7NWK+7qJXcej5x6Eq2upUJaarmiLdWsa8ddHyf5yOZ6T0dVw83Tqx2ZcHvjNfFF8UdDSqwqx3oM52rSnSluzX53GCdO5kMZnnSAEypgC3AAqo5rvMNxT9rRnT6pr1WC6LxJMbsHkuTcFK0cvE6rsrCLrVJvikkvN/wAES7f6UhOydsQCNkANkANkAmwAWAJsAWSAGQpgG/R+BnWnGnTg5zlujH59F1ZbOcYR3pPCLoQlOW7FZZ1LVbVmGDjtztPESWc17tNfDD9ePTcaC7vHWe6tI/PxOgs7JUVvS1l8vA+hIJOAAAAAAAAAAAAAAAMmktHUsTB06sVJb090oP4ovgzLSrTpS3oMxVaMKsd2ayc909qvWw15xvVo79uK7UF+dfVZdxvba+hV0ej/ADgaG5sZ0dVrHr9/v8j59xJpCEzpACZUwBbgANULq/7ueY7atHa3cl+2X6l4P7PQ2dGpvRRStDLx/U2vZOX/ADVF/wCK+ZiuvdQhwO5IJGwARsABsgBsgBsgFlAAZCkAe/q/qzXxbTitilfOtNdn+lfifdl1RGuLunR46vp+cCTb2lSvw0XX7dTpuhNCUcHDZpR7Ttt1JWc6ne+XRZGgr3M6zzL0N/QtoUViPrzZ6RgJAAAAAAAAAAAAAAAAAAAAB89pnVKhXvKH3NR53guxJ/mj9VbxJ9DaFSnpL9S/OZAr7Pp1NY/pf5yPitKauYnD3cqbnBfzKV5xt14x8UbejeUqvB4fRmorWdWlxWV1R5DiSSKLlTAKxjY1+0tm0r+luT0a4Pmn9uq+uGX06jg8otOmpLJ26M5qwoXOxqk3UoupGWP1Q1wlnljPq0SJyjVSw8GaVK2R2VKpGpBThweqIrWHhldgvKEbAAbABKpAFlSAPV0Tq/iMTb2VJuL/AJk+zSX9T3+F2YK1zSpe89enMz0barV9xadeX54ZPudC6j0KVp137efw2tRj4fi8cuhqa+0pz0p/pXx/j81NtQ2bCGtT9T+H8+fofVxikkkkklZJZJLka3ibMkAAAAAAAAAAAAAAAAAAAAAAAAAA8vSGr+Fr3c6UVJ/jp9ibfNtb/G5JpXdanpGWnfqRqtpRqayjr1Wh89jNQ1vo13/xrRv/AHRt8ifDav8AnH0/PqQJ7K/wl6/x9jxsTqfjIbqcanWlUj/7WZKjtChLnjxX2yRJ7Prx5Z8H98HnVtCYmPvYev3qlOS80rGeNxSfCS9TBK3qx4xfozNLAVFvp1F305r6GT2kXzXqWezmuT9GVWAqPdTqPuhJ/Qb8eq9R7OfR+g6loTEy93D1319lNLzasWOvSXGS9UXKhVfCL9GehhtTsbP+UoLnUnBLyTb9DBK/oR/dnwRnjYXEv248Wv5PYwX2fyydavFc40Yt+UpW/wDEiz2qv2R9ft/JKp7Kf75en3f2PotH6rYOhZqkqkl+Ot94787Psp9yINW+rVOeF3afyT6VjRp6pZffr/B7SIhLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        }
      })
    }else{
      for (var i = 0; i < this.state.countries.length; i++) {
        if (this.state.countries[i].code === countryCode) {
          var c = this.state.countries[i];
          break;
        }
      }
      this.setState({
        country: c,
      });
    }
    if (event.target.value === "worldwide") {
      const getRelevantData = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
          .then((data) => data.json())
          .then((data) => {
            var c = {
              total_deaths: data.deaths,
              new_deaths: data.todayDeaths,
              total_cases: data.cases,
              new_cases: data.todayCases,
              total_recovered: data.recovered,
              new_recovered: data.todayRecovered,
            };
            this.setState({
              data: c,
            });
          });
      };
      getRelevantData();
    } else {
      const getRelevantData = async () => {
        await fetch(
          "https://disease.sh/v3/covid-19/countries/".concat(event.target.value)
        )
          .then((data) => data.json())
          .then((data) => {
            var c = {
              total_deaths: data.deaths,
              new_deaths: data.todayDeaths,
              total_cases: data.cases,
              new_cases: data.todayCases,
              total_recovered: data.recovered,
              new_recovered: data.todayRecovered,
            };
            this.setState({
              data: c,
            });
          });
      };
      getRelevantData();
    }
  }

  render() {
    return (
      <div className="app">
        <Navigationbar />
        <div className="app__select">
          <Avatar
            alt="flag"
            src={this.state.country.flag}
            className="app__flag"
          />
          <FormControl className="app__select__form">
            <Select
              value={this.state.country.code}
              onChange={this.onCountryChange}
              label={this.state.country.name}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {this.state.countries.map((country) => (
                <MenuItem value={country.code}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__cards">
          <CardDisplay
            name="Reported Cases"
            total={this.state.data.total_cases}
            new={this.state.data.new_cases}
          />
          <CardDisplay
            name="Reported Deaths"
            total={this.state.data.total_deaths}
            new={this.state.data.new_deaths}
          />
          <CardDisplay
            name="Reported Recovery"
            total={this.state.data.total_recovered}
            new={this.state.data.new_recovered}
          />
        </div>
      </div>
    );
  }
}

export default App;
